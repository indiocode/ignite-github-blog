import { useNavigate } from 'react-router-dom';
import { PostContainer } from './styles';

export function Post() {
	const navigate = useNavigate();

	function handleNavigateToHome() {
		navigate('/');
	}
	return (
		<PostContainer>
			<h1>Post</h1>
			<button onClick={handleNavigateToHome}>Navigate to home</button>
		</PostContainer>
	);
}
