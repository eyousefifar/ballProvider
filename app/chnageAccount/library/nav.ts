import {Navigation} from 'react-native-navigation';
import {screens, dismissModal, Colors} from '../../ball-library';
import ChangeAccount from '../screen';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import ChooseAccount from "../screen/ChooseAccount";
import {heightPercentageToDP, widthPercentageToDP} from "react-native-responsive-screen";

export const registerChangeAccountScreen = () => {

    Navigation.registerComponent(screens.changeAccount.id, () =>
        gestureHandlerRootHOC(ChangeAccount)
    );

    Navigation.registerComponent(screens.chooseAccount.id, () =>
        gestureHandlerRootHOC(ChooseAccount)
    );

};

export const dismissChangeAccountScreen = async () => {
    await dismissModal(screens.changeAccount.id);
};

export const dismissChooseAccountScreen = async () => {
    await dismissModal(screens.chooseAccount.id);
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
