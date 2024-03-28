import Image from 'next/image';
import getReservation from '@/libs/getReservation';
import Link from 'next/link';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import UpdateReservation from '@/components/UpdateReservation';
import DeleteReservation from '@/components/DeleteReservation';

export default async function ReservationDetailPage({params,}: {params: {rid: string};}) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const proflie = await getUserProfile(session.user.token);

	const ReservationDetail = await getReservation(proflie, params.rid);
	return (
		<main className="text-center p-5">
			<h1 className="text-lg font-medium ">{ReservationDetail.data.name}</h1>
			<div className="flex flex-row my-5 flex-wrap ml-[15%] w-[100%]">
				<div className="text-md mx-5 text-left m-5 ml-[5%] w-[50%]">
					<div className="text-md m-5">
						User Id : {ReservationDetail.data.user}
					</div>

					<div className="text-md m-5">
						Co-Working Space : {ReservationDetail.data.coWork.name}
					</div>
					<div className="text-md m-5">
						Date : {ReservationDetail.data.date}
					</div>
					<div className="text-md m-5">
						Start time: {ReservationDetail.data.startTime}
					</div>
					<div className="text-md m-5">
						End time: {ReservationDetail.data.endTime}
					</div>
					<div className="text-md m-5">
						Table: {ReservationDetail.data.table}
					</div>
					<div className="block">
						<UpdateReservation  params={params} />
						<DeleteReservation params={params} />
					</div>
				</div>
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	return [{rid: '001'}, {rid: '002'}, {rid: '003'}, {rid: '004'}];
}
