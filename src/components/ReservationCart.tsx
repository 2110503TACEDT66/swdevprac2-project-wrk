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
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';

export default async function ReservationCart({InterfaceReservation} :{InterfaceReservation :reservationItem}) {

	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const profile = await getUserProfile(session.user.token);
	var createdAt = new Date(InterfaceReservation.createdAt);
	console.log(profile)
	return (
		<main className="bg-slate-100 m-5 p-5">
			<div className="text-2x1">{InterfaceReservation.coWork.name}</div>
			<table className="table-auto border-separate border-spacing-2"><tbody>
				<tr><td>User</td><td>{profile.data.name}</td></tr>
				<tr><td>Start Time</td><td>{InterfaceReservation.startTime}</td></tr>
				<tr><td>End Time</td><td>{InterfaceReservation.endTime}</td></tr>
				<tr><td>Co-working Space Tel.</td><td>{InterfaceReservation.coWork.tel}</td></tr>
				<tr><td>CreatedAt</td><td>{createdAt.toString()}</td></tr>
				</tbody></table>
		</main>
	);
}




{/* <InteractiveCard contentName={coworkName}>
			<div className="w-full h-full relative rounded-lg">
				<Image
					src={imgSrc}
					alt="Product Picture"
					fill={true}
					className="object-cover rounded-lg w-16 md:w-32 lg:w-48"
				/>
				<div className="absolute z-50 p-[10px] m-[10px] bg-orange-500 rounded rounded-xl text-xl text-white font-semibold">
					{coworkName}
				</div>
			</div>
		</InteractiveCard>












'use client';
import {useDispatch} from 'react-redux';
import {AppDispatch, useAppSelector} from '@/redux/store';
import {removeReservation} from '@/redux/feature/carSlice';

export default function ReservationCart() {
	const carItems = useAppSelector((state) => state.cartSlice.carItems);
	const dispatch = useDispatch<AppDispatch>();

	return (
		<div>
			{carItems.map((reservationItem) => (
				<div
					className="bg-slate-200 rounded px-5 mx-5 py-2 my-2"
					key={reservationItem._id}
				>
					<div className="text-xl"> Name : {reservationItem.name}</div>
					<div className="text-sm">
						Start Time: {reservationItem.start_time}
					</div>
					<div className="text-sm"> End Time: {reservationItem.end_time}</div>
					<div className="text-sm"> Date : {reservationItem.date}</div>

					<button
						className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-1
                    text-white shadow-sm"
						onClick={() => dispatch(removeReservation(reservationItem))}
					>
						Remove from Cart
					</button>
				</div>
			))}
		</div>
	);
} */}
