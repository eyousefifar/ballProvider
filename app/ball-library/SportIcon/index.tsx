import React from 'react';
import Icon from '../Icon';
import { observer } from 'mobx-react-lite';

// types.ts
import ISportIcon from './types';

const SportIcon = (props: ISportIcon) => {
  const { sportType, size, color } = props;

  switch (sportType) {
    case 'basketball':
      return (
        <Icon type={'ball'} name={'basketball'} size={size} color={color} />
      );
    case 'football':
      return <Icon type={'ball'} name={'football'} size={size} color={color} />;
    case 'futsal':
      return <Icon type={'ball'} name={'futsal'} size={size} color={color} />;
    case 'Karting':
      return <Icon type={'ball'} name={'Karting'} size={size} color={color} />;
    case 'paintball':
      return (
        <Icon type={'ball'} name={'paintball'} size={size} color={color} />
      );
    case 'Pool':
      return <Icon type={'ball'} name={'Pool'} size={size} color={color} />;
    case 'volleyball':
      return (
        <Icon type={'ball'} name={'volleyball'} size={size} color={color} />
      );
    case 'Game-room':
      return (
        <Icon type={'ball'} name={'Game-room'} size={size} color={color} />
      );
    case 'scape-room':
      return (
        <Icon type={'ball'} name={'scape-room'} size={size} color={color} />
      );
    case 'sport-complex':
      return (
        <Icon type={'ball'} name={'sport-complex'} size={size} color={color} />
      );

    default:
      throw Error('sport must exist in types.ts');
  }
};

export default observer(SportIcon);
