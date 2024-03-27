// 'use client';
import ReservationCart from '@/components/ReservationCart';
import CoWork from '@/components/Addcoworks';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import getReservations from '@/libs/getReservations';

export default async function AllCoWork() {
	const session = await getServerSession(authOptions);

	if (!session || !session.user.token) return null;
	const proflie = await getUserProfile(session.user.token);

	const Reservations = await getReservations(proflie);

	return (
		<main className="text-center">
			{/* <ReservationsCatolog></ReservationsCatolog> */}
		</main>
	);
}
