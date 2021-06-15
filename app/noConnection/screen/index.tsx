import React from 'react';
import {ImageBackground, ToastAndroid, View} from 'react-native';
import {Button, connectivity, EventEmitter} from '../../ball-library';
import { dismissNoConnectionScreen } from '../library/nav';
import { heightPercentageToDP } from 'react-native-responsive-screen';
interface INoConnection {
  requestId: string;
  mode: 'network' | 'server';
}
const NoConnection = (props: INoConnection) => {
  const { requestId, mode } = props;

  // const onPress = async () => {
  //   if (mode === 'server') {
  //     EventEmitter.emit('reload');
  //     await dismissNoConnectionScreen();
  //   } else {
  //     await dismissNoConnectionScreen();
  //   }
  // };

  const onPress = async () => {
    if (connectivity.isConnected){
      await dismissNoConnectionScreen();
    }else {
      ToastAndroid.show('شما به اینترنت متصل نیستید',ToastAndroid.LONG)
    }

  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      resizeMethod={'resize'}
      resizeMode={'stretch'}
      source={require('../assets/noconnection.png')}
    >
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'flex-end',
          marginBottom: heightPercentageToDP('18%')
        }}
      >
        <Button
          onPress={onPress}
          mode={'contained'}
          fullRadius
          size={'big'}
          rippleColor={'lightGrey'}
        >
          {'مشکلی پیش آمد'}
        </Button>
      </View>
    </ImageBackground>
  );
};

export default NoConnection;
