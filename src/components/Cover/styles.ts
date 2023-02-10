import styled from 'styled-components';

export const CoverContainer = styled.div`
	max-width: 54rem;
	width: 100%;
	position: relative;
	margin: 0 auto;
	top: 13rem;

	background-color: ${({ theme }) => theme['base-profile']};
	box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
	border-radius: 10px;
	padding: 2rem;
`;
