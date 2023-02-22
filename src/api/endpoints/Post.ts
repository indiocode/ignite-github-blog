import type { AxiosResponse } from 'axios';

import { API } from '~/api';
import type { Post, PostResponses } from '~/models/Post';

export async function getPosts(): Promise<AxiosResponse<PostResponses>> {
	const response = await API.get(
		'/search/issues?q=repo:indiocode/ignite-github-blog',
	);
	return response;
}

export async function getPost(id: number): Promise<AxiosResponse<Post>> {
	const response = await API.get(
		`repos/indiocode/ignite-github-blog/issues/${id}`,
	);

	return response;
}
