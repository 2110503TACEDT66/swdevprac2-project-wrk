'use client';

import {useRouter} from 'next/navigation';

export default function DeleteReservation({params}: {params: {rid: string}}) {
	const router = useRouter();

	return (
		<button
			className="bg-white text-orange-500 border border-orange-500
                font-semibold py-2 px-2 m-2 rounded z-30  w-[100px]
                hover:bg-orange-500 hover:text-white hover:border-transparent"
			onClick={(e) => {
				e.stopPropagation();
				router.push(`/reservation/${params.rid}/delete`);
			}}
		>
			Delete
		</button>
	);
}
