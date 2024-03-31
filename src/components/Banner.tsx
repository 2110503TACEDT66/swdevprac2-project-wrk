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
				priority={true}
				placeholder="empty"
				className="position-absolute -z-50 object-cover"
			/>
			<div className="text-center m-[5%] color-black content-center justify-center item-center">
				<p className="p-[5%] text-xl font-semibold md:text-3xl">
					Find Your Lovely Co-Working Space
				</p>
				<p className="p-[2%] text-base md:text-xl">
					The best preparation for good work tomorrow is to do good work today.
					- Elbert Hubbard
				</p>
				{session ? (
					<div className="w-[100%] h-[50%] item-center text-center">
						<div className="z-50 mt-[15%] text-center font-semibold text-black text-xl">
							Hello {session.user?.name}
						</div>
						<button
							className="bg-white m-[3%] px-[2%] text-orange-600 border border-[2px] border-gray-600 font-semibold p-2 m-2 rounded z-30 content-center hover:bg-gray-600 hover:text-white hover:border-transparent"
							onClick={(e) => {
								e.stopPropagation();
								router.push('/cowork');
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
