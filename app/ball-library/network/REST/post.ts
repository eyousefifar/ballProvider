import {getHeaders, makeRequest, getRequestUrl} from './helper';

// types.ts
interface IPost {
	url: string;
	body: object;
}

interface IResponse {
	success: boolean;
	data: object;
	error?: string,
	status: number
}

export const post = async (args: IPost): Promise<IResponse> => {
	const {url, body} = args;
	const req = new Request(getRequestUrl(url), {
		body: JSON.stringify(body),
		method: 'POST',
		headers: getHeaders()
	});
	return await makeRequest(req);
};
