import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { PostService } from '~/api';
import { Post } from '~/components/Post';
import type { Post as PostItem, PostResponses } from '~/models/Post';

import {
	HeaderHome,
	HeaderInfo,
	HomeContainer,
	PostsContainer,
} from './styles';

export function Home(): ReactElement {
	const navigate = useNavigate();
	const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

	const [posts, setPosts] = useState<PostResponses>({} as PostResponses);
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const headerRef = useRef<HTMLDivElement>(null);

	function handleNavigateToPost(post: PostItem): void {
		navigate(`/post/${post.number}`);
	}

	async function getPosts(): Promise<void> {
		try {
			const { data } = await PostService.getPosts();
			setPosts(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getPosts();
	}, []);

	useEffect(() => {
		const handleScroll = (): void => {
			if (!headerRef.current) return;

			const headerTop = headerRef.current.getBoundingClientRect().top;

			setIsHeaderFixed(headerTop <= 0);
		};

		window.addEventListener('scroll', handleScroll);
		return (): void => window.removeEventListener('scroll', handleScroll);
	}, [headerRef]);

	return (
		<HomeContainer>
			<HeaderHome
				ref={headerRef}
				isTop={isHeaderFixed}
			>
				<HeaderInfo>
					<span>Publicações</span>
					<span>{posts.total_count} publicações</span>
				</HeaderInfo>
				<input
					type="text"
					placeholder="Buscar conteúdo"
				/>
			</HeaderHome>

			<PostsContainer ref={parent}>
				{posts.items?.map((post) => (
					<Post
						item={post}
						onClick={(): void => handleNavigateToPost(post)}
						key={post.id}
					/>
				))}
			</PostsContainer>
		</HomeContainer>
	);
}
