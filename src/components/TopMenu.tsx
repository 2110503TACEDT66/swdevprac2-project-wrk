import styles from './topmenu.module.css';
import Image from 'next/image';
import TopMenuItem from './TopMenuItem';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import {Link} from '@mui/material';
import getUserProfile from '@/libs/getUserProfile';

export default async function TopMenu() {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token)
		return (
			<div className={styles.menucontainer}>
				<Link href="/">
					<Image
						src={'/img/logo.png'}
						className={styles.logoimg}
						alt="logo"
						width={0}
						height={0}
						sizes="100vh"
					/>
				</Link>
				<TopMenuItem title="Reservation" pageRef="/cart" />
			</div>
		);
	const proflie = await getUserProfile(session.user.token);
	return (
		<div className={styles.menucontainer}>
			<Link href="/">
				<Image
					src={'/img/logo.png'}
					className={styles.logoimg}
					alt="logo"
					width={0}
					height={0}
					sizes="100vh"
				/>
			</Link>
			<TopMenuItem title="My Reservation" pageRef="/reservation" />
			<TopMenuItem title="My Account" pageRef="/user/manage" />
			{session ? (
				<Link href="/api/auth/signout">
					<div className="flex items-center absolute right-0  h-full px-2 text-cyan-600 text-sm">
						Sign-Out of {session.user?.name}
					</div>
				</Link>
			) : null}
		</div>
	);
}
