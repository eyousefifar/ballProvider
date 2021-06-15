import React from 'react';
import {View, ScrollView, Platform} from 'react-native';
import {Observer} from 'mobx-react';

// local
import TabViewWrapper from './TabViewWrapper';
import Tabs from './Tabs';
// types.ts
import {bottomNavigationProps} from './types';

// styles
import styleGenerator from './styles';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import UIClass from './UI';
class BottomNavigation extends React.Component<bottomNavigationProps> {
  public static defaultProps = {
    initialScreenIndex: 0,
  };
  private UI = new UIClass();

  public scrollRef = React.createRef();
  private getRenderProps = () => {
    const {renderProps, initialScreenIndex} = this.props;

    const tabs = [];
    const screens = [];
    const length = renderProps.length;
    for (let index = 0; index < length; index++) {
      tabs.push({
        index,
        tabTitle: renderProps[index].tabTitle,
        tabIcon: renderProps[index].tabIcon,
        onPress: this.onPress,
      });
      screens.push({
        index,
        screen: renderProps[index].screen,
        isInitial: initialScreenIndex === index,
      });
    }
    return {tabs, screens};
  };
  private fullWidth = widthPercentageToDP('100%');
  private onPress = (index: number) => {
    this.scrollRef &&
      this.scrollRef.current.scrollTo({
        x: this.fullWidth * index,
        animated: false,
      });

    if (index == 0) {
      console.warn('Camera Tabbbbbb')
    }
  };
  private timeout: any;
  componentDidMount() {
    const {initialScreenIndex} = this.props;
    this.timeout = setTimeout(() => {
      this.onPress(initialScreenIndex ? initialScreenIndex : 0);
    }, 0);
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  public render() {
    const {initialScreenIndex} = this.props;
    const styles = styleGenerator();
    const {tabs, screens} = this.getRenderProps();
    return (
      <View style={styles.container}>
        <ScrollView
          removeClippedSubviews={Platform.OS === 'android'}
          ref={this.scrollRef}
          style={styles.scrollView}
          horizontal
          scrollEnabled={false}
          showsHorizontalScrollIndicator={false}
          overScrollMode={'never'}
          bounces={false}
          nestedScrollEnabled
          keyboardDismissMode={'none'}
          keyboardShouldPersistTaps={'always'}>
          {screens.map(item => {
            return (
              <Observer key={`${item.index}`}>
                {() => (
                  <TabViewWrapper
                    isFirstViewableTab={item.isInitial}
                    key={`${item.index}`}
                    firstTabIsRendered={this.UI.firstTabIsRendered}
                    setFirstTabRendered={this.UI.setFirstTabRendered}>
                    {item.screen}
                  </TabViewWrapper>
                )}
              </Observer>
            );
          })}
        </ScrollView>
        <Observer>
          {() => (
            <Tabs
              key={'tabs'}
              tab={tabs}
              initialScreenIndex={initialScreenIndex}
            />
          )}
        </Observer>
      </View>
    );
  }
}

export default BottomNavigation;
