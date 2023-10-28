'use client';

import NavigationButton from '@/app/top-navigation/componenets/NavigationButton';
import NavigationLink from '@/app/top-navigation/componenets/NavigationLink';
import routes from '@/routes';
import Link from 'next/link';

export default function TopNavigation() {
	return (
		<nav className='bg-indigo-600 p-2 text-white'>
			<div className='flex flex-row'>
				<Link href={routes.home} className='mr-8 py-3 text-2xl font-extrabold'>
					Simple Blog
				</Link>
				<ul className='flex flex-1 flex-row gap-2'>
					<li>
						<NavigationLink href={routes.home} title='Home' />
					</li>
					<li>
						<NavigationLink href={routes.post.create} title='New Post' />
					</li>
				</ul>
				<NavigationButton href={routes.authentication.register}>
					Register
				</NavigationButton>
				<NavigationLink href={routes.authentication.login} title='Login' />
			</div>
		</nav>
	);
}
