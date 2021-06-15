

import { getHeaders, makeRequest, getRequestUrl } from './helper';

interface IPut {
    url: string;
    body: object;
  }
  interface IResponse {
    success: boolean;
    data: object;
    error?: string;
  }

export const put = async (args: IPut): Promise<IResponse> => {
    const { url, body } = args;
    const req = new Request(getRequestUrl(url), {
      body: JSON.stringify(body),
      method: 'PUT',
      headers: getHeaders()
    });
    return await makeRequest(req);
  };