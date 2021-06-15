import React from 'react';
import { View, Animated, Platform } from 'react-native';
import { observer } from 'mobx-react-lite';

// local
import Card from './Card';
import ComplexReserve from './ComplexReserve';

// styles
import { providerCardStyle as styleGenerator } from './styles';
import UIClass from './UI';
// types.ts
import { IProviderCard } from './types';

const ProviderCard = (props: IProviderCard) => {
  const { type } = props;
  const styles = styleGenerator();
  if ('sportComplex' === 'sportComplex') {
    const UI = new UIClass();
    return (
      <View
        style={styles.container}
        removeClippedSubviews={Platform.OS === 'android'}
      >
        <Animated.View
          style={{ flex: 1, transform: [{ translateY: UI.TranslateY }] }}
        >
          <Card {...props} onReservePress={UI.showReserveMenu} />
          <ComplexReserve onHidePress={UI.hideReserveMenu} />
        </Animated.View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Card {...props} />
      </View>
    );
  }
};

export default observer(ProviderCard);
