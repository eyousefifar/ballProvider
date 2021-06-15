import {BackHandler} from 'react-native';

import dismissModal from './dismissModal';
import pop from './pop';
import dismissOverlay from './dismissOverlay';

// types.ts
type actions =
    | 'showModal'
    | 'push'
    | 'showOverlay'
    | 'setRoot'
    | 'dismissModal'
    | 'dismissOverlay'
    | 'pop';

interface IHistory {
    screenId: string;
    action: actions;
}

class NavigationState {
    history: IHistory[] = [
        {
            screenId: 'Home',
            action: 'setRoot'
        }
    ];

    backHandler: any;
    lastType: actions = 'setRoot';


    handleBackPress = async () => {
        const lastEvent = this.lastNavigationEvent();
        if (lastEvent.screenId === 'Home') {
            return false;
        } else {
            switch (this.lastType) {
                case 'showModal':
                    await dismissModal(lastEvent.screenId);
                    return true;
                case 'push':
                    await pop(lastEvent.screenId);
                    return true;
                case 'showOverlay':
                    await dismissOverlay(lastEvent.screenId);
                    return true;
                case 'setRoot':
                    return false;
                default:
                    throw Error(`not valid types ${this.lastType}`);
            }
        }
    };


    setBackHandler = (type: actions) => {
        this.lastType = type;
        this.removeBackHandler();
        this.backHandler = BackHandler.addEventListener(
            'hardwareBackPress',
            this.handleBackPress
        );
    };


    removeBackHandler = () => {
        this.backHandler && this.backHandler.remove();
        this.backHandler = undefined;
    };


    lastNavigationEvent = (): IHistory => {
        return this.history[this.history.length - 1];
    };


    onNavigationEvent = (screenId: string, action: actions) => {
        if (action === 'push' || action === 'showModal' || action === 'showOverlay') {
            this.history.push({screenId, action});
            this.setBackHandler(action);
        } else if (action === 'dismissModal' || action === 'pop' || action === 'dismissOverlay') {
            if (this.lastNavigationEvent().screenId === screenId) {
                this.history.pop();
                if (this.history.length > 1) {
                    this.setBackHandler(this.lastNavigationEvent().action);
                } else if (this.history.length === 1) {
                    this.removeBackHandler();
                }
            } else {
                throw Error('somewhere the order of using this method is not right!');
            }
        }
    };


    canAddScreen = (screenId: string, action: actions): boolean => {
        if (this.lastNavigationEvent().screenId === screenId) {
            return false;
        } else {
            this.onNavigationEvent(screenId, action);
            return true;
        }
    };

    resetStack = () : void => {
      this.history = [
        {
          screenId: 'Home',
          action: 'setRoot'
        }
      ];
    };


    canRemoveScreen = (screenId: string, action: actions): boolean => {
        if (this.lastNavigationEvent().screenId === screenId) {
            this.onNavigationEvent(screenId, action);
            return true;
        } else {
            throw Error(`remove is called on an unmounted component ${screenId}`);
        }
    };
}

const state = new NavigationState();
export default state;
