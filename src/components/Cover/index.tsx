import { useLocation } from 'react-router-dom';
import { PostCover } from '../PostCover';
import { ProfileCover } from '../ProfileCover';
import { CoverContainer, CoverContent, HeaderHome, HeaderInfo } from './styles';

export function Cover() {
	const location = useLocation();

	return (
		<CoverContainer>
			<CoverContent>
				{location.pathname.includes('post') ? <PostCover /> : <ProfileCover />}
			</CoverContent>
			{!location.pathname.includes('post') && (
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
			)}
		</CoverContainer>
	);
}
