import type { ReactElement } from 'react';

import { Logo } from '~/assets';

import { HeaderContainer } from './styles';

export function Header(): ReactElement {
	return (
		<HeaderContainer>
			<img
				src={Logo}
				alt="Logo Image"
			/>
			<h1>GITHUB BLOG</h1>
		</HeaderContainer>
	);
}
