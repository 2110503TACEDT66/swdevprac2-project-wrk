import getReservation from '@/libs/getReservation';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import {redirect} from 'next/navigation';
import updateReservation from '@/libs/updateReservation';
import getUserProfile from '@/libs/getUserProfile';

export default async function updatereservation({
	params,
}: {
	params: {rid: string};
}) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;
	const proflie = await getUserProfile(session.user.token);
	const CoworkDetail = await getReservation(session.user.token, params.rid);
	const ReservationDetail = await getReservation(proflie, params.rid);
	const UpdateReservation = async (UpdateReservation: FormData) => {
		'use server';
		const startTime = UpdateReservation.get('startTime');
		const endTime = UpdateReservation.get('endTime');

		const item: any = {
			id: params.rid,
			startTime: startTime,
			endTime: endTime,
		};

		try {
			const user = await updateReservation(session.user.token, params.rid);
		} catch (error) {
			console.log(error);
		}
		redirect(`/reservation/${params.rid}`);
	};
	console.log(ReservationDetail);
	return (
		<form
			action={UpdateReservation}
			className="my-[10%] mx-[25%] w-[80%] h-[60%]"
		>
			<div className="text-xl text-orange-500 font-medium m-5">
				Change Your Reservation Time
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="startTime">
					startTime
				</label>
				<input
					type="text"
					required
					id="startTime"
					name="startTime"
					placeholder={ReservationDetail.data.startTime}
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="endTime">
					endTime
				</label>
				<input
					type="text"
					required
					id="endTime"
					name="endTime"
					placeholder={CoworkDetail.data.endTime}
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<button
				type="submit"
				className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded m-5"
			>
				Edit Reservation
			</button>
		</form>
	);
}
