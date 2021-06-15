import auth from '../../auth';
import { baseUrl } from './config';
import showModal from '../../navigation/showModal';
import { screens } from '../../constants';

// types.ts
interface IResponse {
  success: boolean;
  data: object;
  error?: string,
  status : number
}
export const getHeaders = () => {
  return {
    Authorization: auth.getToken(),
    'Content-Type': 'application/json'
  };
};

export const getRequestUrl = (url: string) => {
  return `${baseUrl}${url}`;
};

export const onNetworkError = async () => {
  await showModal({
    ...screens.noConnection,
    passProps: {
      mode: 'server'
    }
  });
};

export const makeRequest = async (req: Request): Promise<IResponse> => {
  try {
    const res: Response = await fetch(req);
    const resBody = await res.json();
    if (res.status >= 500) {
      await onNetworkError();
    }
    return {
      success: res.ok,
      data: resBody,
      error: res.ok ? undefined : resBody.errs,
      status : res.status
    };
  } catch (err) {
    await onNetworkError();
    return {
      success: false,
      data: {},
      error: `${err}`,
      status : 4004
    };
  }
};
