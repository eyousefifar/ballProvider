import React from 'react';
import { View } from 'react-native';

// local
import FullHeader from './FullHeader';
import BackButton from './BackButton';

// types.ts
import { headerProps } from './types';
import { Navigation } from 'react-native-navigation';

const Header = (props: headerProps) => {
  const { drawBehind, mode, title, onPress, backgroundColor } = props;

  if (mode === 'fullWidth') {
    return (
      <FullHeader
        drawBehind={drawBehind}
        title={title}
        onPress={onPress}
        backgroundColor={backgroundColor}
      />
    );
  }
  if (mode === 'backButton') {
    return <BackButton onPress={onPress} />;
  }
  throw Error('header mode must be defined');
};

export const ScrollHeaderPadding = () => {
  return <View style={{ height: 56, width: '100%' }} />;
};

export default Header;
