import { useNavigate } from 'react-router-dom';
import { Post } from '~/components/Post';
import { HomeContainer, PostsContainer } from './styles';

export function Home() {
	const navigate = useNavigate();

	function handleNavigateToPost() {
		navigate('/post');
	}

	return (
		<HomeContainer>
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
