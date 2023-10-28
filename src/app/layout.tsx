import TopNavigation from '@/app/top-navigation/TopNavigation';
import { WithChildren } from '@/types/util/with-children';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Simple Blog',
	description: "A simple blog- Hybrid Teams' application assessment",
};

export default function RootLayout({ children }: WithChildren<{}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<TopNavigation />
				{children}
			</body>
		</html>
	);
}
