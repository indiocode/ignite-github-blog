import type { User } from './User';

export interface Post {
	id?: number;
	number: number;
	html_url: string;
	title: string;
	created_at: Date;
	body: string;
	comments: number;
	user: User;
}

export interface PostResponses {
	total_count: number;
	items: Post[];
}
