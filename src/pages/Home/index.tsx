import { useNavigate } from 'react-router-dom';
import { HomeContainer } from './styles';

export function Home() {
	const navigate = useNavigate();

	function handleNavigateToPost() {
		navigate('/post');
	}

	return (
		<HomeContainer>
			<h1>Home</h1>
			<button onClick={handleNavigateToPost}>Navigate to post</button>
		</HomeContainer>
	);
}
