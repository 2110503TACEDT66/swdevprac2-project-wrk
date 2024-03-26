'use client';

import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import {useRouter} from 'next/navigation';

export default function CoWork() {
	const router = useRouter();

	return (
		<button
			className="bg-white text-orange-500 border border-orange-500
                font-semibold py-2 px-2 m-2 rounded z-30 absolute bottom-10 right-10
                hover:bg-orange-500 hover:text-white hover:border-transparent"
			onClick={(e) => {
				e.stopPropagation();
				router.push('/newcowork');
			}}
		>
			Add New CoWorking Space Now
		</button>
	);
}
