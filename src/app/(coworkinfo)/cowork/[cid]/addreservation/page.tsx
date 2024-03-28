import {dbConnect} from '@/db/dbConnect';
import {revalidateTag} from 'next/cache';
import {redirect} from 'next/navigation';
import Reservation from '@/db/models/Reservation';
import getUserProfile from '@/libs/getUserProfile';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getCowork from '@/libs/getCowork';
import addReservation from '@/libs/addReservation';

export default async function AddReservationPage({
	params,
}: {
	params: {cid: string};
}) {
	const addReservationFunc = async (addReservationForm: FormData) => {
		'use server';

		const session = await getServerSession(authOptions);
		if (!session || !session.user.token) return null;

		const user = await getUserProfile(session.user.token);
		const coworkObj = await getCowork(params.cid);
		const dateRe = addReservationForm.get('dateRe')!.toString();
		const table = addReservationForm.get('table')!.toString();
		const startTime = addReservationForm.get('Start-time')!.toString();
		const endTime = addReservationForm.get('End-time')!.toString();
		if (!dateRe) return null;
		try {
			await addReservation(
				session.user.token,
				params.cid,
				user.data.id,
				dateRe,
				startTime,
				endTime,
				table
			);
			console.log('Success ass reservation');
		} catch (error) {
			console.log(error);
		}
		revalidateTag('reservations');
		redirect('/reservation');
	};

	return (
		<form
			action={addReservationFunc}
			className="my-[10%] mx-[25%] w-[80%] h-[60%]"
		>
			<div className="text-xl text-orange-500 font-medium m-5">
				New Add Reservation
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="dateRe">
					date
				</label>
				<input
					type="text"
					required
					id="dateRe"
					name="dateRe"
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
				Create New reservationing
			</button>
		</form>
	);
}
