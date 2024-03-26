'use client';
import {useState} from 'react';
import {useWindowListener} from '@/hooks/useWindowListener';
import {useRouter} from 'next/navigation';
import Image from 'next/image';

export default function Reception() {
	const covers = [
		'/img/cover1.jpg',
		'/img/cover2.jpg',
		'/img/cover3.jpg',
		'/img/cover4.jpg',
	];
	const [index, setIndex] = useState(0);
	const router = useRouter();

	return (
		<div
			className="block w-[100vw] h-[90vh] p-[5px] position-relative content-around overflow-hidden "
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

			<div className="text-center w-fill m-5 color-black   dark:color-white">
				<p className="p-[5%] text-xl font-semibold md:text-3xl">
					Find Your Lovely Co-Working Space
				</p>
				<p className="p-[2%] text-base md:text-xl">
					The best preparation for good work tomorrow is to do good work today.
					- Elbert Hubbard
				</p>
				<div className="justify-items-center content-center item-center ">
					<button
						className="h-[25%] w-[30%] p-[1%] m-[5%] bg-white text-gray-600 drop-shadow-lg border border-gray-600 font-semibold rounded-lg hover:bg-orange-600 hover:text-white hover:border-transparent"
						onClick={(e) => {
							e.stopPropagation();
							router.push('/login');
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
			</div>
		</div>
	);
}
