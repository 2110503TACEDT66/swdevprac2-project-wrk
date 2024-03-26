'use client';

import {useState} from 'react';
import {useRouter} from 'next/navigation';
import styles from './banner.module.css';
import Image from 'next/image';
import {useSession} from 'next-auth/react';

export default function Banner() {
	const covers = [
		'/img/cover1.jpg',
		'/img/cover2.jpg',
		'/img/cover3.jpg',
		'/img/cover4.jpg',
	];
	const [index, setIndex] = useState(0);
	const router = useRouter();

	const {data: session} = useSession();
	console.log(session?.user?.token);

	return (
		<div
			className={styles.banner}
			onClick={() => {
				setIndex(index + 1);
			}}
		>
			<Image
				alt="cover"
				src={covers[index % 4]}
				fill={true}
				objectFit="cover"
				priority={true}
				placeholder="empty"
				className="position-absolute -z-50"
			/>
			<div className="text-center w-[100vw] m-5 color-black   dark:color-white">
				<p className="p-[5%] text-xl font-semibold md:text-3xl">
					Find Your Lovely Co-Working Space
				</p>
				<p className="p-[2%] text-base md:text-xl">
					The best preparation for good work tomorrow is to do good work today.
					- Elbert Hubbard
				</p>
				{session ? (
					<div>
						<div className="z-30 absolute top-5 right-10 font-semibold text-cyan-800 text-xl">
							Hello {session.user?.name}
						</div>
						<button
							className="bg-white text-cyan-600 border border-cyan-600
            font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-0 right-0
            hover:bg-cyan-600 hover:text-white hover:border-transparent"
							onClick={(e) => {
								e.stopPropagation();
								router.push('/car');
							}}
						>
							Reserve Your Space NOW
						</button>
					</div>
				) : (
					<div className="justify-items-center content-center item-center ">
						<button
							className="h-[25%] w-[30%] p-[1%] m-[5%] bg-white text-gray-600 drop-shadow-lg border border-gray-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white hover:border-transparent"
							onClick={(e) => {
								e.stopPropagation();
								router.push('/api/auth/signin');
							}}
						>
							Login
						</button>
						<button
							className="h-[25%] w-[30%] p-[1%] m-[5%] bg-white text-gray-600 drop-shadow-lg border border-gray-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white hover:border-transparent"
							onClick={(e) => {
								e.stopPropagation();
								router.push('/register');
							}}
						>
							Register
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
