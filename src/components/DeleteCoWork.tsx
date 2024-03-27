'use client';

import {useRouter} from 'next/navigation';

export default function DeleteCoWork({params}: {params: {cid: string}}) {
	const router = useRouter();

	const handleDelete = () => {
		// Display confirmation dialog
		const isConfirmed = window.confirm('Are you sure you want to delete?');

		// If confirmed, proceed with deletion
		if (isConfirmed) {
			router.push(`/cowork/${params.cid}/delete`);
		}
	};

	return (
		<button
			className="bg-white text-orange-500 border border-orange-500
                font-semibold py-2 px-2 m-2 rounded z-30  w-[100px]
                hover:bg-orange-500 hover:text-white hover:border-transparent"
			onClick={(e) => {
				e.stopPropagation();
				handleDelete();
			}}
		>
			Delete
		</button>
	);
}
