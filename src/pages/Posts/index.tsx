import type { ReactElement } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import { PostContainer } from './styles';

const data = `
- [ ] Task list 1
- [ ] Pending task list 2
- [x] Completed task list 3
- [x] Completed task list 4 


`;

export function Posts(): ReactElement {
	return (
		<PostContainer>
			<ReactMarkdown remarkPlugins={[remarkGfm]}>{data}</ReactMarkdown>
		</PostContainer>
	);
}
