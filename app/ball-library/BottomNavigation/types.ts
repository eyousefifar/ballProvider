import { ReactNode } from 'react';

type sports =
  | 'antDesign'
  | 'evilIcons'
  | 'feather'
  | 'ion'
  | 'ball'
  | 'simpleLine';
interface renderProps {
  tabTitle: string;
  tabIcon: {
    type: sports;
    name: string;
  };
  screen: ReactNode;
}
export interface bottomNavigationProps {
  renderProps: renderProps[];
  initialScreenIndex?: number;
}

export interface tabWrapperProps {
  children: ReactNode;
  isFirstViewableTab: boolean;
  firstTabIsRendered: boolean;
  setFirstTabRendered: () => void;
}
export interface tabProps {
  index: number;
  tabTitle: string;
  tabIcon: {
    type: sports;
    name: string;
  };
  onPress: (index: number) => void;
  activeTabIndex?: number;
  setActiveTab?: (index: number) => void;
}
export interface tabsProps {
  tab: tabProps[];
  initialScreenIndex: number | undefined;
}
