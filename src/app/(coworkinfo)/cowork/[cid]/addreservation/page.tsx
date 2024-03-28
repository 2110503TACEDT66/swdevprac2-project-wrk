import {dbConnect} from '@/db/dbConnect';
import {revalidateTag} from 'next/cache';
import {redirect} from 'next/navigation';
import Reservation from '@/db/models/Reservation';
import getUserProfile from '@/libs/getUserProfile';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getCowork from '@/libs/getCowork';

export default async function AddReservationPage({
	params,
}: {
	params: {cid: string};
}) {
	const addReservation = async (addReservationForm: FormData) => {
		'use server';

		const session = await getServerSession(authOptions);
		if (!session || !session.user.token) return null;

		const userId = getUserProfile(session.user._id);
		const coworkObj = await getCowork(params.cid);
		const date = addReservationForm.get('date');
		const table = addReservationForm.get('table');
		const Start_time = addReservationForm.get('Start-time');
		const End_time = addReservationForm.get('End-time');

		try {
			await dbConnect();
			const reservation = await Reservation.create({
				user: userId,
				coWork: coworkObj,
				date: date,
				startTime: Start_time,
				endTime: End_time,
				table: table,
			});
		} catch (error) {
			console.log(error);
		}
		revalidateTag('reservations');
		redirect('/reservation');
	};

	return (
		<form action={addReservation} className="my-[10%] mx-[25%] w-[80%] h-[60%]">
			<div className="text-xl text-orange-500 font-medium m-5">
				New Add Reservation
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="date">
					date
				</label>
				<input
					type="text"
					required
					id="date"
					name="date"
					placeholder="yyyy/mm/dd"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="table">
					table
				</label>
				<input
					type="text"
					required
					id="table"
					name="table"
					placeholder="A00"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Start time">
					Start time
				</label>
				<input
					type="text"
					required
					id="Start-time"
					name="Start-time"
					placeholder="00:00:00"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="End time">
					End time
				</label>
				<input
					type="text"
					required
					id="End-time"
					name="End-time"
					placeholder="00:00:00"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<button
				type="submit"
				className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded m-5"
			>
				Add New reservationing Space
			</button>
		</form>
	);
}
