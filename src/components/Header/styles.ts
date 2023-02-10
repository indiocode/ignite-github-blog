import styled from 'styled-components';

export const HeaderContainer = styled.header`
	height: 18.5rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 4rem;
	gap: 1.25rem;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	right: 0;

	background-color: ${({ theme }) => theme['base-profile']};

	h1 {
		font-family: 'Coda', cursive;
		font-weight: 400;
		font-size: 1.5rem;
		line-height: 1.6;
		color: ${({ theme }) => theme.blue};
	}
`;
