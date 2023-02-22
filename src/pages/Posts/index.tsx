import Markdown from 'markdown-to-jsx';
import type { ReactElement } from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostService } from '~/api';
import type { Post } from '~/models/Post';

import { PostContainer } from './styles';

export function Posts(): ReactElement {
	const { id } = useParams();

	const [post, setPost] = useState<Post>({} as Post);

	const getPost = useCallback(async () => {
		try {
			const { data } = await PostService.getPost(Number(id));
			setPost(data);
		} catch (error) {
			console.error(error);
		}
	}, [id]);

	useEffect(() => {
		getPost();
	}, [getPost]);

	console.log(post);

	return (
		<PostContainer>
			{post.body && <Markdown>{post.body}</Markdown>}
		</PostContainer>
	);
}
