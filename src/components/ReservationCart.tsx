interface reservationItem {
	_id: string;
	user: string;
	coWork: {
		_id: string;
		name: string;
		province: string;
		tel: string;
		id: string;
	};
	date: string;
	startTime: string;
	endTime: string;
	table: string;
	createdAt: string;
	__v: number;
}

import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';

export default async function ReservationCart({
	InterfaceReservation,
}: {
	InterfaceReservation: reservationItem;
}) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const profile = await getUserProfile(session.user.token);
	var createdAt = new Date(InterfaceReservation.createdAt);
	console.log(InterfaceReservation);
	return (
		<main className="bg-slate-100 m-5 p-5 w-full">
			<div className="text-2x1">{InterfaceReservation.coWork.name}</div>
			<table className="table-auto border-separate border-spacing-2">
				<tbody>
					<tr>
						<td>User</td>
						<td>{InterfaceReservation.user.name}</td>
					</tr>
					<tr>
						<td>Start Time</td>
						<td>{InterfaceReservation.startTime}</td>
					</tr>
					<tr>
						<td>End Time</td>
						<td>{InterfaceReservation.endTime}</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
}
