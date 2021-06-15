import authentication from '../auth';
import { screens } from '../constants';
import showOverlay from './showOverlay';

export default (auth: boolean) => {
  if (auth) {
    if (authentication.isAuthorized) {
      return true;
    } else {
      showOverlay({
        ...screens.authNeeded
      });
    }
  } else {
    return true;
    
  }
};
