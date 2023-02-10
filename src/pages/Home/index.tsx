import { useNavigate } from 'react-router-dom';
import { Post } from '~/components/Post';
import {
	HeaderHome,
	HeaderInfo,
	HomeContainer,
	PostsContainer,
} from './styles';

export function Home() {
	const navigate = useNavigate();

	function handleNavigateToPost() {
		navigate('/post');
	}

	return (
		<HomeContainer>
			<HeaderHome>
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
