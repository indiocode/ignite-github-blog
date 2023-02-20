import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowUpRightFromSquare,
	faCalendar,
	faChevronLeft,
	faComment,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ReactElement } from 'react';
import { NavLink } from 'react-router-dom';

import {
	PostContainer,
	PostHeader,
	PostInfo,
	SocialIcon,
	SocialIconGroup,
} from './styles';

export function PostCover(): ReactElement {
	return (
		<PostContainer>
			<PostInfo>
				<PostHeader>
					<NavLink to="/">
						<FontAwesomeIcon icon={faChevronLeft} />
						<span>voltar</span>
					</NavLink>

					<a
						href="https://github.com/indiocode"
						rel="noopener noreferrer"
						target="_blank"
					>
						<span>ver no github</span>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
				</PostHeader>

				<h1>JavaScript data types and data structures</h1>

				<SocialIconGroup>
					<SocialIcon>
						<FontAwesomeIcon icon={faGithub} />
						<span>cameronwll</span>
					</SocialIcon>

					<SocialIcon>
						<FontAwesomeIcon icon={faCalendar} />
						<span>Há 1 dia</span>
					</SocialIcon>
					<SocialIcon>
						<FontAwesomeIcon icon={faComment} />
						<span>5 comentários</span>
					</SocialIcon>
				</SocialIconGroup>
			</PostInfo>
		</PostContainer>
	);
}
