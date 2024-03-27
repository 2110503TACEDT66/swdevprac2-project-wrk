'use client';

import {useRouter} from 'next/navigation';

export default function UpdateReservation({
	ReservationDetail,
	params,
}: {
	ReservationDetail: any;
	params: {rid: string};
}) {
	const router = useRouter();

	return (
		<button
			className="bg-white text-orange-500 border border-orange-500
                font-semibold py-2 px-2 m-2 rounded z-30  w-[100px] m-5
                hover:bg-orange-500 hover:text-white hover:border-transparent"
			onClick={(e) => {
				e.stopPropagation();
				router.push(`/reservation/${params.rid}/update`);
			}}
		>
			Edit
		</button>
	);
}
