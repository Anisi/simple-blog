import { WithChildren } from '@/types/util/with-children';
import clsx from 'clsx';
import Link from 'next/link';
import type { JSX } from 'react';

type NavigationButtonProps = WithChildren<{
	href: string;
}> &
	JSX.IntrinsicElements['button'];

export default function NavigationButton({
	className,
	href,
	...restProps
}: NavigationButtonProps) {
	return (
		<Link href={href} className='p-2' prefetch={false}>
			<button
				className={clsx(
					'rounded border-2 border-white px-4 py-1 transition-all hover:bg-white hover:text-indigo-600',
					className
				)}
				{...restProps}
			/>
		</Link>
	);
}
