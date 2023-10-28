'use client';

import NavigationButton from '@/app/top-navigation/componenets/NavigationButton';
import NavigationLink from '@/app/top-navigation/componenets/NavigationLink';
import routes from '@/routes';

export default function TopNavigation() {
	return (
		<nav className='bg-indigo-600 p-2 text-white'>
			<div className='flex flex-row'>
				<ol className='flex flex-1 flex-row gap-2'>
					<NavigationLink href={routes.home} title='Home' />
					<NavigationLink href={routes.post.create} title='New Post' />
				</ol>
				<NavigationButton href={routes.authentication.register}>
					Register
				</NavigationButton>
				<NavigationButton href={routes.authentication.login}>
					Login
				</NavigationButton>
			</div>
		</nav>
	);
}
