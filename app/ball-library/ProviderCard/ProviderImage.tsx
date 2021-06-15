import React from 'react';
import { View, Image } from 'react-native';

// styles
import { providerImageStyle as styleGenerator } from './styles';
// types.ts
import { providerImageProps } from './types';
const ProviderImage = (props: providerImageProps) => {
  const styles = styleGenerator();
  return (
    <View style={styles.container}>
      <Image source={{ uri: props.uri }} style={styles.image} />
    </View>
  );
};

export default ProviderImage;
