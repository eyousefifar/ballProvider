import React from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { showSport } from './nav';
import ProviderImage from './ProviderImage';
import ProviderInfo from './ProviderInfo';
import ReserveButton from './ReserveButton';
// styles
import { cardStyle as styleGenerator } from './styles';
// types.ts
import { IProviderCard } from './types';
interface ICard extends IProviderCard {
  onReservePress?: () => void;
}
const Card = (props: ICard) => {
  const {
    sportId,
    type,
    uri,
    providerAddress,
    providerName,
    onReservePress
  } = props;
  const { styles, rippleColor } = styleGenerator();
  const onProviderCardPress = async () => {
    await showSport('sport', 'test');
  };
  return (
    <RectButton
      style={styles.container}
      onPress={onProviderCardPress}
      rippleColor={rippleColor}
    >
      <ProviderImage
        uri={
          'https://cdn01.zoomit.ir/2019/5/43a6b412-3b83-44c5-9bfb-63093e2627de-400x267.jpg'
        }
      />
      <ProviderInfo
        providerName={providerName}
        providerAddress={providerAddress}
      />
      <ReserveButton
        type={'sport'}
        id={'test'}
        onReservePress={onReservePress}
      />
    </RectButton>
  );
};

export default Card;
