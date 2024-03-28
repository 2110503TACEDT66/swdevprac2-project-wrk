'use client';

import {useRouter} from 'next/navigation';

export default function Addreservation() {
	const router = useRouter();

	return (
		<button
			className="bg-orange-500 text-white text-xl border border-orange-500
                font-semibold py-2 px-2 m-2 rounded-full z-30 absolute bottom-10 right-10
                hover:bg-orange-700 hover:text-white hover:border-transparent"
			onClick={(e) => {
				e.stopPropagation();
				router.push('/cowork');
			}}
		>
			Add New Reservation
		</button>
	);
}
