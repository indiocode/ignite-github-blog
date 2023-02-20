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

export function Home(): ReactElement {
	const navigate = useNavigate();

	function handleNavigateToPost(): void {
		navigate('/post');
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

			<PostsContainer>
				<Post onClick={handleNavigateToPost} />
				<Post onClick={handleNavigateToPost} />
				<Post onClick={handleNavigateToPost} />
				<Post onClick={handleNavigateToPost} />
				<Post onClick={handleNavigateToPost} />
				<Post onClick={handleNavigateToPost} />
			</PostsContainer>
		</HomeContainer>
	);
}
