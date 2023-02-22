import type { AxiosResponse } from 'axios';

import { API } from '~/api';
import type { User } from '~/models/User';

export async function getUser(): Promise<AxiosResponse<User>> {
	const response = await API.get('/users/indiocode');
	return response;
}
