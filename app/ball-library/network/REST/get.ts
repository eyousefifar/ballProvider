

import { getHeaders, makeRequest, getRequestUrl } from './helper';

// types.ts

interface IGet {
    url: string;
  }

  interface IResponse {
    success: boolean;
    data: object;
    error?: string;
  }
export const get = async (args: IGet): Promise<IResponse> => {
    const { url } = args;
    const req = new Request(getRequestUrl(url), {
      method: 'GET',
      headers: getHeaders()
    });
    return await makeRequest(req);
  };

