import { Navigation } from 'react-native-navigation';
import Authentication from '../screen';
import RegisterPage from './../components/Register'
import ConfirmPage from '../components/ConfirmPage'
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {screens, dismissModal, showModal, Colors} from '../../ball-library';
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";
import {SportSiteData} from "../../chnageAccount/library/types";

export const registerAuthScreen = () => {
  Navigation.registerComponent(screens.authentication.id, () =>
    gestureHandlerRootHOC(Authentication)
  );

  Navigation.registerComponent(screens.register.id, () =>
      gestureHandlerRootHOC(RegisterPage)
  );

  Navigation.registerComponent(screens.confirm.id, () =>
      gestureHandlerRootHOC(ConfirmPage)
  );
};


export const showRegisterScreen = async () => {

  await showModal({
    ...screens.register,
  });
};
export const showConfirmScreen = async (isLogin:boolean,phone:string) => {

  // console.warn('PHONE : ', phone);
  // console.warn('isLogin : ', isLogin);

  await showModal({
    ...screens.confirm,
    passProps:{
      isLogin : isLogin,
      phone:phone
    }
  });
};


export const setRootAuthenticated = async () => {
  await Navigation.setRoot({
    root: {
      sideMenu: {
        right: {
          component: {
            id: screens.drawer.id,
            name: screens.drawer.id,
            options: {
              sideMenu: {
                right: {
                  width: widthPercentageToDP('86%'),
                  height: heightPercentageToDP('100%'),
                },
              },
            },
          },
        },
        center: {
          /*stack: {
            children: [
              {
                component: {
                  id: screens.home.id,
                  name: screens.home.id,
                  passProps:{
                    initialScreenIndex:1
                  }
                }
              },
            ],
            options: {
              animations: {
                setRoot: {
                  enabled: false
                }
              }
            }
          }*/

          bottomTabs: {
            children: [
              {
                component: {
                  id: screens.wallet.id,
                  name: screens.wallet.id,
                  options: {
                    bottomTab: {
                      text: 'مالی',
                      icon: require('../../../assets/icons/wallet.png'),
                      // badge:'3',
                      badgeColor: 'red',
                      fontFamily: 'IRANSansMobile(FaNum)',
                      fontSize: 10,

                      selectedFontSize: 12,
                      // selectedIconColor:Colors.primaryPurple,
                      selectedTextColor: Colors.primaryPurple,
                    }
                  }
                }
              },
              {
                component: {
                  id: screens.manage.id,
                  name: screens.manage.id,
                  options: {
                    bottomTab: {
                      text: 'مدیریت',
                      icon: require('../../../assets/icons/manage.png'),
                      fontFamily: 'IRANSansMobile(FaNum)',
                      fontSize: 10,

                      selectedFontSize: 12,
                      // selectedIconColor:Colors.primaryPurple,
                      selectedTextColor: Colors.primaryPurple,
                    }
                  }
                },
              },
              {
                component: {
                  id: screens.qrCode.id,
                  name: screens.qrCode.id,
                  options: {
                    bottomTab: {
                      text: 'اسکنر',
                      icon: require('../../../assets/icons/qrcode.png'),
                      fontFamily: 'IRANSansMobile(FaNum)',
                      fontSize: 10,

                      selectedFontSize: 12,
                      selectedIconColor: Colors.primaryPurple,
                      selectedTextColor: Colors.primaryPurple,
                    }
                  }
                }
              },
            ],
            options: {}
          }
        },
      },
    },
  });
};

export const showChooseSportSiteModal = async (sportSites:Array<SportSiteData>) => {
  await showModal({
    ...screens.chooseAccount,
    passProps:{
      sportSites:sportSites
    }
  })
};

export const dismissAuthScreen = async () => {
  await dismissModal(screens.authentication.id);
};
export const dismissLoginScreen = async () => {
  await dismissModal(screens.login.id);
};
export const dismissRegisterScreen = async () => {
  await dismissModal(screens.register.id);
};
export const dismissConfirmScreen = async () => {
  await dismissModal(screens.confirm.id);
};
