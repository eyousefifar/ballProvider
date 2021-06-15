import { I18nManager } from 'react-native';
import { runApp, auth, connectivity } from './app/ball-library'

I18nManager.allowRTL(false);
I18nManager.forceRTL(false);
runApp();
auth.authCheck();
connectivity.subscribe();

