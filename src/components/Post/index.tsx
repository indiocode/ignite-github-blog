import { formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import type { HtmlHTMLAttributes, ReactElement } from 'react';

import type { PostItem } from '~/pages/Home';

import { HeaderPost, PostContainer } from './styles';

interface PostProps extends HtmlHTMLAttributes<HTMLElement> {
	item: PostItem;
}

export function Post({ item, ...rest }: PostProps): ReactElement {
	return (
		<PostContainer {...rest}>
			<HeaderPost>
				<h1>{item.title}</h1>
				<span>
					{formatDistanceToNow(new Date(item.createdAt), {
						addSuffix: true,
						locale: ptBR,
					})}
				</span>
			</HeaderPost>
			<p>{item.content}</p>
		</PostContainer>
	);
}
