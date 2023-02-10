import styled from 'styled-components';

export const HomeContainer = styled.div`
	max-width: 54rem;
	margin: 0 auto;
	position: relative;
	padding: 2rem 0;
	top: 12.25rem;
`;

export const PostsContainer = styled.main`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);

	gap: 2rem;

	--auto-grid-min-size: 18.125rem;
	grid-template-columns: repeat(
		auto-fill,
		minmax(var(--auto-grid-min-size), 1fr)
	);
`;
