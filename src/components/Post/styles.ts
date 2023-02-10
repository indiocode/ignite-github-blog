import styled from 'styled-components';

export const PostContainer = styled.article`
	background-color: ${({ theme }) => theme['base-post']};
	width: 26rem;
	height: 16.25rem;
	border-radius: 10px;
	cursor: pointer;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	gap: 1.25rem;

	p {
		font-weight: 400;
		font-size: 1rem;
		line-height: 1.6;

		-webkit-box-orient: vertical;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: normal;
	}

	@media (max-width: 960px) {
		width: 100%;
	}
`;

export const HeaderPost = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: flex-start;

	h1 {
		max-width: 17.6875rem;
		width: 100%;
		font-weight: 700;
		font-size: 1.25rem;
		line-height: 1.6;
	}

	@media (max-width: 480px) {
		flex-direction: column-reverse;
	}
`;
