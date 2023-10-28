import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavigationLinkProps = {
	title: string;
	href: string;
};
export default function NavigationLink({ title, href }: NavigationLinkProps) {
	const pathname = usePathname();

	return (
		<Link
			href={href}
			className={clsx('block p-4 hover:underline', {
				'font-bold': pathname === href,
			})}
		>
			{title}
		</Link>
	);
}
