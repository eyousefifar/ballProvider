import {Colors as MaterialColors} from 'react-native-paper';
import {StyleSheet} from "react-native";
export const Colors = {
  primaryPurple: '#7200CA',
  lightPurple800: '#9C4DCC',
  lightPurple700: '#ae50d4',
  secondaryPurple: '#390065',
  mainBlue: MaterialColors.blue900,
  transparentPurple: 'rgba(114,0,202, 0.2)',
  transparentGrey: 'rgba(112,112,112,0.3)',
  transparentWhite: 'rgba(255,255,255, 0.7)',
  // maleBlue: '#3988EF',
  // femalePink: '#E840CE',
  maleBlue: '#88aaff',
  femalePink: '#fe7fbe',
  lightGrey: MaterialColors.grey200,
  grey: MaterialColors.grey400,
  darkGrey: MaterialColors.grey600,

  // redCancel: '#df1d2b',
  redDiscount: '#ca0036',
  homeTitleBar: '#f2f8ff',
  titleBarLines: '#626166',
  icons: '#626166',
  greenBall: '#79c325',
  grayBall: '#a7a7a7',
  disableButton:'#979797',
  // disableButton:'#efefef',
  whiteBall: '#ffffff',
  darkBall: '#000',
  ballNewGray:'#626166',
  ballH3:'#7d7d7d',
  ballStarColor:'#ed8a19',
  headerColor:'#efefef',
  rippleColor:'#efefef',
  transparentAboutUs:'rgba(125,125,125,0.5)',
  transparentAuthInput:'rgba(125,125,125,0.5)',
  inputBack:'#efefef',
  lockedSans:'#efefef'
};
export const linearGradientColors = [
  Colors.secondaryPurple,
  Colors.primaryPurple,
];
export const defaultTheme = {
  dark: false,
  rtl: true,
  roundness: 4,
  colors: {
    primary: Colors.primaryPurple,
    accent: Colors.secondaryPurple,
    background: 'white',
    surface: 'white',
    error: MaterialColors.red600,
    text: 'black',
    disabled: Colors.lightGrey,
    placeholder: Colors.darkGrey,
    backdrop: Colors.transparentGrey,
    notification: MaterialColors.pink800,
  },
  fonts: {
    regular: 'IRANSansMobile(FaNum)',
    medium: 'IRANSansMobile(FaNum)_Medium',
    light: 'IRANSansMobile(FaNum)_Light',
    thin: 'IRANSansMobile(FaNum)_UltraLight',
  },
};
export const lightTheme = {
  dark: false,
  rtl: true,
  roundness: 4,
  colors: {
    primary: 'white',
    accent: Colors.transparentWhite,
    background: Colors.transparentGrey,
    surface: 'white',
    error: MaterialColors.red600,
    text: 'white',
    disabled: Colors.lightGrey,
    placeholder: Colors.darkGrey,
    backdrop: Colors.transparentGrey,
    notification: MaterialColors.pink800,
  },
  fonts: {
    regular: 'IRANSansMobile(FaNum)',
    medium: 'IRANSansMobile(FaNum)_Medium',
    light: 'IRANSansMobile(FaNum)_Light',
    thin: 'IRANSansMobile(FaNum)_UltraLight',
  },
};
export const darkTheme = {
  dark: false,
  rtl: true,
  roundness: 4,
  colors: {
    primary: 'black',
    accent: Colors.darkGrey,
    background: Colors.transparentGrey,
    surface: Colors.lightGrey,
    error: MaterialColors.red600,
    text: 'black',
    disabled: Colors.lightGrey,
    placeholder: Colors.darkGrey,
    backdrop: Colors.transparentGrey,
    notification: MaterialColors.pink800,
  },
  fonts: {
    regular: 'IRANSansMobile(FaNum)',
    medium: 'IRANSansMobile(FaNum)_Medium',
    light: 'IRANSansMobile(FaNum)_Light',
    thin: 'IRANSansMobile(FaNum)_UltraLight',
  },
};

export const Radius = {
  typeButton_4: 5,
  typeButton_8: 8,
};
export const BorderWidth = {
  type_4: StyleSheet.hairlineWidth,
  type_5: 0.5,
};

export const IconSize = {
  // home header icons && rate
  type_1:24,
  // inc & dec icons
  type_2:20,
  // home card icons
  type_3:15,
};

export const Elevation = {
  type_2: 2,
  type_6: 6,
};
