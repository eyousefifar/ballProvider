import React, {ReactElement, useState, useEffect} from 'react';
import {View} from 'react-native';
import LottieView from 'lottie-react-native';
import {observer} from 'mobx-react-lite';

// styles

import styleGenerator from './styles';
import {screens} from '../constants';
// types.ts
interface ILoading {
  loaded: boolean;
  dark: boolean;
  children: ReactElement;
  screenId?: string;
  scrollView?: boolean;
}

// class Loading extends React.Component<ILoading> {
//   private darkLoading = require('./darkLoading.json');
//   private lightLoading = require('./lightLoading.json');

//   render() {
//     const { loaded, children, scrollView, screenId, dark } = this.props;
//     const animationSource = dark ? this.darkLoading : this.lightLoading;

//     const styles = styleGenerator(scrollView);
//     const didScreenAppeared =
//       screenId === 'Home' ? true : state.currentAppearedScreen === screenId;
//     if (loaded && didScreenAppeared) {
//       return children;
//     } else {
//       return (
//         <View style={styles.container}>
//           <LottieView
//             style={styles.loading}
//             source={animationSource}
//             autoPlay
//             speed={1.7}
//             loop
//           />
//         </View>
//       );
//     }
//   }
// }

const Loading = (props: ILoading) => {
  const {children, dark, loaded, screenId, scrollView} = props;
  const animationSource = dark
    ? require('./ball loading.json')
    : require('./lightLoading.json');
  const styles = styleGenerator(scrollView);
  const [animationDone, setAnimationStat] = useState();
  let timer: any;
  useEffect(() => {
    timer = setTimeout(() => {
      setAnimationStat(true);
    }, 240);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  if (loaded && animationDone) {
    return children;
  } else {
    return (
      <View style={styles.container}>
        <LottieView
          style={styles.loading}
          source={animationSource}
          autoPlay
          speed={1.7}
          loop
        />
      </View>
    );
  }
};

export default observer(Loading);
