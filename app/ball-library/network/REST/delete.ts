import { getHeaders, makeRequest, getRequestUrl } from './helper';

// types.ts
interface IDelete {
    url: string;
  }
interface IResponse {
    success: boolean;
    data: object;
    error?: string;
  }

export const del = async (args: IDelete): Promise<IResponse> => {
    const { url } = args;
    const req = new Request(getRequestUrl(url), {
      method: 'DELETE',
      headers: getHeaders()
    });
    return await makeRequest(req);
  };
