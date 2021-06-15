import AsyncStorage from '@react-native-community/async-storage';
import * as Keychain from 'react-native-keychain';
import uuid from 'uuid/v4';
import { observable, action, decorate, computed } from 'mobx';
class Authorization {
  // token to use in request, we use default token to check devices that are not logged in
  private token = observable({
    value: 'ballToken'
  });

  private refreshToken = observable({
    value: 'ballToken'
  });

  // computed value to get auth stats
  public get isAuthorized() {
    // return this.token.value === 'ballToken';
    return this.token.value != 'ballToken';
  }
  // getter for token to keep direct changes
  public getToken = () => {
    return this.token.value;
  };
  public getRefreshToken = () => {
    return this.refreshToken.value;
  };
  // device id
  private deviceId: string = 'none';
  private getDeviceId = async (): Promise<string> => {
    const deviceId = await AsyncStorage.getItem('deviceId');
    if (deviceId !== null) {
      this.deviceId = deviceId;
      return this.deviceId;
    } else {
      return this.deviceId;
    }
  };
  private generateDeviceId = async () => {
    try {
      const deviceId: string = `${uuid()}--${new Date()} `;
      await AsyncStorage.setItem('deviceId', deviceId);
      this.deviceId = deviceId;
      return deviceId;
    } catch (err) {
      // TODO log all errors
    }
  };


  public setToken = async (token: string, refreshToken : string) => {
    try {
      const deviceId: string | null = await this.getDeviceId();

      // make token & refresh token as an object
      const authPack = {
        token : token,
        refreshToken : refreshToken
      };

      // stringify auth package
      const authPackJsonString = JSON.stringify(authPack);

      if (deviceId !== 'none') {
        // save auth pack to keychain
        await Keychain.setGenericPassword(deviceId, authPackJsonString);

        this.token.value = token;
        this.refreshToken.value = refreshToken;


      } else {
        const newDeviceId: string | undefined = await this.generateDeviceId();
        // do some logging here, this should not happen
        if (newDeviceId) {
          // save auth pack to keychain
          await Keychain.setGenericPassword(newDeviceId, authPackJsonString);

          this.token.value = token;
          this.refreshToken.value = refreshToken;

          // await Keychain.setGenericPassword(newDeviceId, token);
          // this.token.value = token;
        } else {
          // log
        }
      }
    } catch (err) {
      // log
    }
  };

  public logout = async () => {
    await this.setToken('ballToken','ballToken');
  };
  public authCheck = async () => {
    const [deviceId, credentials] = await Promise.all([
      this.getDeviceId(),
      Keychain.getGenericPassword()
    ]);
    if (credentials && deviceId !== 'none') {
      // parse json object
      let authPack = JSON.parse(credentials.password);


      this.token.value = authPack.token;
      this.refreshToken.value = authPack.refreshToken;

      // this.token.value = credentials.password;
      // this.refreshToken.value = credentials.password;

      this.deviceId = deviceId;

    } else if (deviceId !== 'none') {
      this.deviceId = deviceId;

    } else {
      await this.generateDeviceId();
    }
    console.warn('refresh Token ',this.getRefreshToken());
  };
}

decorate(Authorization, {
  isAuthorized: computed,
  setToken: action,
  authCheck: action
});

const auth = new Authorization();

export default auth;
