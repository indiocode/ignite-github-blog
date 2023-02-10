import styled, { css } from 'styled-components';

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

export const HeaderHome = styled.div<{ isTop?: boolean }>`
	background-color: ${({ theme }) => theme['base-background']};
	padding-top: 4.5rem;
	display: flex;
	flex-direction: column;

	gap: 12px;
	width: 100%;

	input {
		width: 100%;
		background-color: ${({ theme }) => theme['base-input']};
		border: 1px solid ${({ theme }) => theme['base-border']};
		border-radius: 6px;
		height: 3.125rem;
		padding: 1rem;

		font-weight: 400;
		font-size: 1rem;
		line-height: 1.6;
	}

	${({ isTop }) =>
		isTop &&
		css`
			position: sticky;
			top: 0;
			padding-top: 2rem;
		`}
`;

export const HeaderInfo = styled.div`
	display: flex;
	justify-content: space-between;

	span:first-child {
		font-weight: 700;
		font-size: 1.125rem;
		line-height: 1.6;
		color: ${({ theme }) => theme['base-subtitle']};
	}

	span:last-child {
		font-weight: 400;
		font-size: 0.875rem;
		line-height: 160%;
		color: ${({ theme }) => theme['base-span']};
	}
`;
