import { Outlet } from 'react-router-dom';
import { Cover } from '~/components/Cover';
import { Header } from '~/components/Header';
import { LayoutContainer } from './styles';

export function DefaultLayout() {
	return (
		<LayoutContainer>
			<Header />
			<Cover />
			<Outlet />
		</LayoutContainer>
	);
}
