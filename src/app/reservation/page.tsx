import Addreservation from '@/components/Addreservations';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import getReservations from '@/libs/getReservations';
import ReservationCatalog from '@/components/ReservationCatalog';

interface reservationItem {
	_id: string;
	user: string;
	coWork: Object;
	date: string;
	startTime: string;
	endTime: string;
	table: string;
	createdAt: string;
	__v: number;
}

export default async function AllCoWork() {

	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const Reservations = await getReservations(session.user.token);

	return (
		<main className="text-center">
			<div className="text-3xl font-medium text-orange-500 m-5">Reservation</div>
			<ReservationCatalog ReservationJson={Reservations} />
			<Addreservation />
		</main>
	);
}
