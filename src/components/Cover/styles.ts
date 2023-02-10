import styled from 'styled-components';

export const CoverContainer = styled.div`
	position: sticky;
	max-width: 54rem;
	margin: 0 auto;
	background-color: ${({ theme }) => theme['base-profile']};
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 2rem;
	z-index: 9999;
	top: 12rem;
`;
