import Navbar from './Navbar';
import Footer from './Footer';
import { useSession } from 'next-auth/react';
import { Router } from 'next/router';

const Layout = ({ children }) => {

	return (
		<div>
			<Navbar/>
			{children}
		</div>
	);
};

export default Layout;