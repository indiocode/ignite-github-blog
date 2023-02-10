import styled from 'styled-components';

export const ProfileContainer = styled.div`
	display: flex;
	/* flex-wrap: wrap; */
	gap: 2rem;

	img {
		border-radius: 8px;
		max-height: 9.25rem;
		max-width: 9.25rem;
		width: 100%;
		height: 100%;
	}

	@media (max-width: 768px) {
		img {
			display: none;
		}
	}
`;

export const ProfileInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.5rem;

	p {
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.6;
	}
`;

export const ProfileHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	h1 {
		font-size: 1.5rem;
		line-height: 1.3;
		font-weight: 700;
	}

	a {
		color: ${({ theme }) => theme['blue']};
		font-weight: 700;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.75rem;
		text-transform: uppercase;
		text-decoration: none;
		position: relative;

		&:before {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			border-bottom: 1px solid ${({ theme }) => theme['blue']};
			transform: scaleX(0);
		}

		&:hover:before {
			transform: scaleX(1);
			transition: transform 0.2s ease-in-out;
		}
	}
`;

export const SocialIconGroup = styled.div`
	display: flex;
	gap: 1.5rem;
	padding-top: 1.5rem;
`;

export const SocialIcon = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;

	svg {
		color: ${({ theme }) => theme['base-label']};
	}

	span {
		font-weight: 400;
		font-size: 1rem;
		line-height: 160%;
		color: ${({ theme }) => theme['base-subtitle']};
	}
`;
