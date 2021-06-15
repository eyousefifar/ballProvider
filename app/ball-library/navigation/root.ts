import {
    Navigation,
    OptionsModalPresentationStyle,
} from 'react-native-navigation';

// screens register functions
import {registerDrawerScreen} from '../../drawer';
import {registerAuthScreen} from '../../authentication2';
import {registerAboutUsScreen} from '../../aboutUs';
import {registerPrivacyScreen} from '../../privacy';
import {registerFAQScreen} from '../../FAQ';
import {registerNoConnectionScreen} from '../../noConnection';
import {registerAuthNeededScreen} from '../AuthNeeded/nav';

import {registerHomePageScreen} from '../../Home'
import {registerManagePageScreen} from '../../Manage'
import {registerQrCodePageScreen} from '../../Scanner'
import {registerWalletScreen} from '../../Wallet'
import {registerTransactionScreen} from '../../Transactions'
import {registerChangeAccountScreen} from '../../chnageAccount'


import {Colors} from '../theme';
import {
    widthPercentageToDP,
    heightPercentageToDP,
} from 'react-native-responsive-screen';
import {screens} from '../constants';
import {auth, userProfile} from "../index";


const registerScreens = () => {
    registerAuthScreen();
    registerDrawerScreen();
    registerAboutUsScreen();
    registerPrivacyScreen();
    registerFAQScreen();
    registerNoConnectionScreen();
    registerAuthNeededScreen();

    registerHomePageScreen();
    registerManagePageScreen();
    registerWalletScreen();
    registerTransactionScreen();
    registerQrCodePageScreen();
    registerChangeAccountScreen();
};

const setRootWithoutAuth = async () => {
    await Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: Colors.primaryPurple,
            style: 'light',
        },

        topBar: {
            visible: false,
            height: 0,
        },
        modalPresentationStyle: OptionsModalPresentationStyle.overCurrentContext,

        bottomTabs: {
            backgroundColor: '#efefef',
        },

        layout: {
            direction: 'ltr',
            orientation: ['portrait'],
            backgroundColor: Colors.whiteBall,

            //fitSystemWindows: true,
        },
        overlay: {
            handleKeyboardEvents: true,
        },
        animations: {
            push: {
                waitForRender: true,
                enabled: true,

                content: {
                    enabled: true,
                    waitForRender: true,
                    x: {
                        from: 2 * widthPercentageToDP('100%'),
                        to: 0,
                        interpolation: 'decelerate',
                        duration: 240,
                    },
                },
            },
            showModal: {
                waitForRender: true,

                enabled: true,

                x: {
                    from: 2 * widthPercentageToDP('100%'),
                    to: 0,
                    interpolation: 'decelerate',
                    duration: 240,
                },
            },
            dismissModal: {
                enabled: true,

                waitForRender: false,
                x: {
                    from: 0,
                    to: 4 * widthPercentageToDP('100%'),
                    duration: 420,
                    interpolation: "accelerate",
                },

            },
            pop: {
                enabled: true,
                waitForRender: false,
                content: {
                    enabled: true,
                    waitForRender: false,

                    x: {
                        from: 0,
                        to: 4 * widthPercentageToDP('100%'),
                        duration: 420,
                        interpolation: "accelerate",
                    },
                },
            },
        },
    });

    await userProfile.getSportSiteIds();

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
                                            selectedIconColor:Colors.primaryPurple,
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
                                            selectedIconColor:Colors.primaryPurple,
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
                },
            },
        },
    });
};

const setRootAuth = async () => {
    await Navigation.setDefaultOptions({
        statusBar: {
            backgroundColor: Colors.primaryPurple,
            style: 'light',
        },

        topBar: {
            visible: false,
            height: 0,
        },
        modalPresentationStyle: OptionsModalPresentationStyle.overCurrentContext,

        bottomTabs: {
            backgroundColor: '#efefef',
        },

        layout: {
            direction: 'ltr',
            orientation: ['portrait'],
            backgroundColor: Colors.whiteBall,

            //fitSystemWindows: true,
        },
        overlay: {
            handleKeyboardEvents: true,
        },
        animations: {
            push: {
                waitForRender: true,
                enabled: true,

                content: {
                    enabled: true,
                    waitForRender: true,
                    x: {
                        from: 2 * widthPercentageToDP('100%'),
                        to: 0,
                        interpolation: 'decelerate',
                        duration: 240,
                    },
                },
            },
            showModal: {
                waitForRender: true,

                enabled: true,

                x: {
                    from: 2 * widthPercentageToDP('100%'),
                    to: 0,
                    interpolation: 'decelerate',
                    duration: 240,
                },
            },
            dismissModal: {
                enabled: true,

                waitForRender: false,
                x: {
                    from: 0,
                    to: 4 * widthPercentageToDP('100%'),
                    duration: 420,
                    interpolation: "accelerate",
                },

            },
            pop: {
                enabled: true,
                waitForRender: false,
                content: {
                    enabled: true,
                    waitForRender: false,

                    x: {
                        from: 0,
                        to: 4 * widthPercentageToDP('100%'),
                        duration: 420,
                        interpolation: "accelerate",
                    },
                },
            },
        },
    });

    await Navigation.setRoot({
        root: {
            sideMenu: {
                center: {
                    stack: {
                        children: [
                            {
                                component: {
                                    id: screens.authentication.id,
                                    name: screens.authentication.id,
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
                    }
                },
            },
        },
    });
};


export default async () => {
    await registerScreens();
    await Navigation.events().registerAppLaunchedListener(async () => {

        // console.log('Is Authorized : ', auth.isAuthorized);

        await setTimeout(async () => {
            console.warn('Token Root : ',auth.getToken());
            if (auth.isAuthorized)
                await setRootWithoutAuth();
            else
                await setRootAuth();
        }, 100);


    });
    // await auth.authCheck();


};
