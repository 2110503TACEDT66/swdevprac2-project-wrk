export interface reservationObj {
	success: boolean;
	count: number;
	data: reservationItem[];
}

interface reservationItem {
	_id: string;
	user: string;
	coWork: string;
	date: string;
	startTime: string;
	endTime: string;
	table: string;
	createdAt: string;
	__v: number;
}


import {getServerSession} from 'next-auth';
import ProductCard from './ProductCard';
import Link from 'next/link';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';

export default async function CarCatalog({
	ReservationJson
}: {
	ReservationJson: reservationObj;
}) {
	const carJsonRedy = await ReservationJson;

	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const proflie = await getUserProfile(session.user.token);

	return (
		<>
			Explore {carJsonRedy.count} Reservation in your catalog
			<div
				style={{
					margin: '20px',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					alignContent: 'space-around',
				}}
			>
				{carJsonRedy.data.map((reservationItem: reservationItem) => (
					<Link href={`/reservation/${reservationItem.id}`} className="w-[100%] sm:w-[50%] md:w-[30%] 1g:w-[25%] p-2 sm:p-4 md:p-4 1g:p-8">
						<ProductCard
							coworkName={reservationItem.name}
							imgSrc={reservationItem.picture}
						/>
					</Link>
				))}
			</div>
		</>
	);
}
