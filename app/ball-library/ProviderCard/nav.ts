import showModal from '../navigation/showModal';
import { screens } from '../constants';
import push from '../navigation/push';

export const showSport = async (type: 'sport' | 'sportComplex', id: string) => {
  await showModal({
    id: type === 'sport' ? screens.sport.id : screens.sportComplex.id,
    auth: false,
    passProps: {
      sportId: id,
      initialScreenIndex: 1
    }
  });
};

export const showSportReserve = async (type: 'sport' | 'sportComplex', id: string) => {
  await showModal({
    id: type === 'sport' ? screens.sport.id : screens.sportComplex.id,
    auth: false,
    passProps: {
      sportId: id,
      initialScreenIndex: 0
    }
  });
};
