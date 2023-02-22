import { faGithub } from '@fortawesome/free-brands-svg-icons';
import {
	faArrowUpRightFromSquare,
	faBuilding,
	faUserGroup,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';

import { UserService } from '~/api';
import type { User } from '~/models/User';

import {
	ProfileContainer,
	ProfileHeader,
	ProfileInfo,
	SocialIcon,
	SocialIconGroup,
} from './styles';

export function ProfileCover(): ReactElement {
	const [user, setUser] = useState<User | null>(null);

	async function getUser(): Promise<void> {
		try {
			const { data } = await UserService.getUser();
			setUser(data);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getUser();
	}, []);

	const formatter = new Intl.NumberFormat('en-GB', {
		notation: 'compact',
		compactDisplay: 'short',
	});

	return (
		<ProfileContainer>
			<img
				src={user?.avatar_url}
				alt="Cover Image"
			/>

			<ProfileInfo>
				<ProfileHeader>
					<h1>{user?.name}</h1>

					<a
						href={user?.html_url}
						rel="noopener noreferrer"
						target="_blank"
					>
						<span>github</span>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</a>
				</ProfileHeader>

				<p>{user?.bio}</p>

				<SocialIconGroup>
					<SocialIcon>
						<FontAwesomeIcon icon={faGithub} />
						<span>{user?.login}</span>
					</SocialIcon>

					<SocialIcon>
						<FontAwesomeIcon icon={faBuilding} />
						<span>{user?.company}</span>
					</SocialIcon>
					<SocialIcon>
						<FontAwesomeIcon icon={faUserGroup} />
						<span>{formatter.format(Number(user?.followers))} seguidores</span>
					</SocialIcon>
				</SocialIconGroup>
			</ProfileInfo>
		</ProfileContainer>
	);
}
