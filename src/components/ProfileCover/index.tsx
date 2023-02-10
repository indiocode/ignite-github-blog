import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
	ProfileContainer,
	ProfileHeader,
	ProfileInfo,
	SocialIcon,
	SocialIconGroup,
} from './styles';

export function ProfileCover() {
	return (
		<ProfileContainer>
			<img
				src="https://picsum.photos/148"
				alt="Cover Image"
			/>

			<ProfileInfo>
				<ProfileHeader>
					<h1>Cameron Williamson</h1>

					<a
						href="https://github.com/indiocode"
						rel="noopener noreferrer"
						target="_blank"
					>
						<span>github</span>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
				</ProfileHeader>

				<p>
					Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
					viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
					pulvinar vel mass.
				</p>

				<SocialIconGroup>
					<SocialIcon>
						<FontAwesomeIcon icon={faGithub} />
						<span>cameronwll</span>
					</SocialIcon>

					<SocialIcon>
						<FontAwesomeIcon icon={faBuilding} />
						<span>Rocketseat</span>
					</SocialIcon>
					<SocialIcon>
						<FontAwesomeIcon icon={faUserGroup} />
						<span>32 seguidores</span>
					</SocialIcon>
				</SocialIconGroup>
			</ProfileInfo>
		</ProfileContainer>
	);
}
