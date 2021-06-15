import React from 'react';
import { View } from 'react-native';
import { Paragraph, Caption } from 'react-native-paper';

// styles
import { providerInfoStyle as styleGenerator } from './styles';
// types.ts
import { providerInfoProps } from './types';

const ProviderInfo = (props: providerInfoProps) => {
  const { providerName, providerAddress } = props;
  const styles = styleGenerator();
  return (
    <View style={styles.container}>
      <Paragraph style={styles.title} numberOfLines={1}>
        {'شهدای نارمک تهران'}
      </Paragraph>
      <Caption numberOfLines={1}>{'تهران، نارمک'}</Caption>
    </View>
  );
};

export default ProviderInfo;
