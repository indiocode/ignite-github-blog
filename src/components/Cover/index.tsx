import { useLocation } from 'react-router-dom';
import { PostCover } from '../PostCover';
import { ProfileCover } from '../ProfileCover';
import { CoverContainer } from './styles';

export function Cover() {
	const location = useLocation();

	return (
		<CoverContainer>
			{location.pathname.includes('post') ? <PostCover /> : <ProfileCover />}
		</CoverContainer>
	);
}
