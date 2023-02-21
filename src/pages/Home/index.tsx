import { useAutoAnimate } from '@formkit/auto-animate/react';
import type { ReactElement } from 'react';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Post } from '~/components/Post';

import {
	HeaderHome,
	HeaderInfo,
	HomeContainer,
	PostsContainer,
} from './styles';

export interface PostItem {
	id?: string;
	title: string;
	createdAt: Date;
	content: string;
}

const posts: PostItem[] = [
	{
		id: '40e5319c-293e-11ec-8d53-0242ac130003',
		title: 'JavaScript data types and data structures',
		createdAt: new Date(2023, 1, 19),
		content: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language.`,
	},

	{
		id: '40e5319c-293e-11ec-8d53-0242ac130004',
		title: 'Java data types and data structures',
		createdAt: new Date(),
		content: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language.`,
	},

	{
		id: '40e5319c-293e-11ec-8d53-0242ac130005',
		title: 'Typescript data types and data structures',
		createdAt: new Date(),
		content: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language.`,
	},

	{
		id: '40e5319c-293e-11ec-8d53-0242ac130006',
		title: 'Python data types and data structures',
		createdAt: new Date(),
		content: `Programming languages all have built-in data structures, but these often
    differ from one language to another. This article attempts to list the
    built-in data structures available in JavaScript and what properties
    they have. These can be used to build other data structures. Wherever
    possible, comparisons with other languages are drawn. Dynamic typing
    JavaScript is a loosely typed and dynamic language.`,
	},
];

export function Home(): ReactElement {
	const navigate = useNavigate();
	const [parent, enableAnimations] = useAutoAnimate(/* optional config */);

	function handleNavigateToPost(post: PostItem): void {
		navigate(`/post/${post.id}`);
	}

	const [isHeaderFixed, setIsHeaderFixed] = useState(false);
	const headerRef = useRef<HTMLDivElement>(null);

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
					<span>6 publicações</span>
				</HeaderInfo>
				<input
					type="text"
					placeholder="Buscar conteúdo"
				/>
			</HeaderHome>

			<PostsContainer ref={parent}>
				{posts.map((post) => (
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
