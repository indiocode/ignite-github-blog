import type { HtmlHTMLAttributes, ReactElement } from 'react';

import { HeaderPost, PostContainer } from './styles';

interface PostProps extends HtmlHTMLAttributes<HTMLElement> {}

export function Post({ ...rest }: PostProps): ReactElement {
	return (
		<PostContainer {...rest}>
			<HeaderPost>
				<h1>JavaScript data types and data structures</h1>
				<span>há 1 dia</span>
			</HeaderPost>
			<p>
				Programming languages all have built-in data structures, but these often
				differ from one language to another. This article attempts to list the
				built-in data structures available in JavaScript and what properties
				they have. These can be used to build other data structures. Wherever
				possible, comparisons with other languages are drawn. Dynamic typing
				JavaScript is a loosely typed and dynamic language.
			</p>
		</PostContainer>
	);
}
