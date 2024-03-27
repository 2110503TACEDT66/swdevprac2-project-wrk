// import getReservation from '@/libs/getReservation';
// import {getServerSession} from 'next-auth';
// import {authOptions} from '@/app/api/auth/[...nextauth]/route';
// import getUserProfile from '@/libs/getUserProfile';
// import {redirect} from 'next/navigation';
// import updateReservation from '@/libs/updateReservation';

// export default async function update({params}: {params: {rid: string}}) {
// 	const session = await getServerSession(authOptions);
// 	if (!session || !session.user.token) return null;
// 	const update_Reservation = async (updateReservation: FormData) => {
// 		'use server';
// 		const Start_time = updateReservation.get('Start-time');
// 		const End_time = updateReservation.get('End-time');

// 		const item: any = {
// 			id: params.rid,
// 			startTime: Start_time,
// 			endTime: End_time,
// 		};

// 		try {
// 			const user = await updateReservation(session.user.token, item);
// 		} catch (error) {
// 			console.log(error);
// 		}
// 		redirect(`/Reservation/${params.rid}`);
// 	};

// 	return (
// 		<form
// 			action={updateReservation}
// 			className="my-[10%] mx-[25%] w-[80%] h-[60%]"
// 		>
// 			<div className="text-xl text-orange-500 font-medium m-5">
// 				New Co-Working Space
// 			</div>
// 			<div className="flex items-center w-1/2 my-2 ">
// 				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Start time">
// 					Start time
// 				</label>
// 				<input
// 					type="text"
// 					required
// 					id="Start-time"
// 					name="Start-time"
// 					placeholder="Start time"
// 					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
// 				/>
// 			</div>
// 			<div className="flex items-center w-1/2 my-2 ">
// 				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="End time">
// 					End time
// 				</label>
// 				<input
// 					type="text"
// 					required
// 					id="End-time"
// 					name="End-time"
// 					placeholder="End time"
// 					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
// 				/>
// 			</div>
// 			<button
// 				type="submit"
// 				className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded m-5"
// 			>
// 				Add New Reservationing Space
// 			</button>
// 		</form>
// 	);
// }
