import styled from 'styled-components';

export const CoverContainer = styled.div`
	max-width: 54rem;

	width: 100%;

	position: sticky;
	margin: 0 auto;
	z-index: 2;
	top: 13rem;
`;

export const CoverContent = styled.div`
	background-color: ${({ theme }) => theme['base-profile']};
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 2rem;
`;

export const HeaderHome = styled.div`
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
