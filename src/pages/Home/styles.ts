import styled from 'styled-components';

export const HomeContainer = styled.div`
	max-width: 54rem;
	margin: 0 auto;

	/* margin-bottom: 234px; */
`;

export const PostsContainer = styled.main`
	margin-top: 296px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	gap: 2rem;

	--auto-grid-min-size: 26rem;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
`;
