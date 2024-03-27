import getCowork from '@/libs/getCowork';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import {redirect} from 'next/navigation';
import updateCoWork from '@/libs/updateCoWork';

export default async function update({params}: {params: {cid: string}}) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;
	const CoworkDetail = await getCowork(params.cid);
	const updatecowork = async (updatecowork: FormData) => {
		'use server';
		const Open_time = updatecowork.get('Open-time');
		const Close_time = updatecowork.get('Close-time');

		const item: any = {
			id: params.cid,
			Open_time: Open_time,
			Close_time: Close_time,
		};

		try {
			const user = await updateCoWork(session.user.token, item);
		} catch (error) {
			console.log(error);
		}
		redirect(`/cowork/${params.cid}`);
	};

	return (
		<form action={updatecowork} className="my-[10%] mx-[25%] w-[80%] h-[60%]">
			<div className="text-xl text-orange-500 font-medium m-5">
				Editing {CoworkDetail.data.name} Information
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Open time">
					Open time
				</label>
				<input
					type="text"
					required
					id="Open-time"
					name="Open-time"
					placeholder={CoworkDetail.data.Open_time}
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Close time">
					Close time
				</label>
				<input
					type="text"
					required
					id="Close-time"
					name="Close-time"
					placeholder={CoworkDetail.data.Close_time}
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<button
				type="submit"
				className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded m-5"
			>
				Add New CoWorking Space
			</button>
		</form>
	);
}
