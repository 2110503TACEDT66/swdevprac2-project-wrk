import Image from 'next/image';
import getReservation from '@/libs/getReservation';
import Link from 'next/link';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import UpdateReservation from '@/components/UpdateReservation';
import DeleteReservation from '@/components/DeleteReservation';

export default async function ReservationDetailPage({
	params,
}: {
	params: {rid: string};
}) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const proflie = await getUserProfile(session.user.token);

	const ReservationDetail = await getReservation(proflie, params.rid);
	return (
		<main className="text-center p-5">
			<h1 className="text-lg font-medium ">{ReservationDetail.data.name}</h1>
			<div className="flex flex-row my-5 flex-wrap ml-[15%] w-[100%]">
				<Image
					src={ReservationDetail.data.picture}
					alt="Reservation Image"
					width={0}
					height={0}
					sizes="100vw"
					className="rounded-lg w-[30%]"
				/>
				{/* 
_id
660260f60866cbce4a570811
user
6602606a0866cbce4a57080c
coWork
6601c01ac6ee26d17685b51f
date
"2024-05-11"
startTime
"19:00:00"
endTime
"23:00:00"
table
"A5-1732"
createdAt
2024-03-26T05:45:26.130+00:00
__v
0 */}
				<div className="text-md mx-5 text-left m-5 ml-[5%] w-[50%]">
					<div className="text-md m-5">
						User Id : {ReservationDetail.data.user}
					</div>

					<div className="text-md m-5">
						Co-Working Space : {ReservationDetail.data.coWork}
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

					<Link
						href={`/reservations?id=${params.rid}&name=${ReservationDetail.data.user}`}
					>
						<button
							className="block rounded-md bg-orange-400 hover:bg-orange-600 px-3 py-1
                    text-white shadow-sm m-5"
						>
							Make a Reservation
						</button>
					</Link>
					{proflie.data.role === 'admin' ? (
						<div className="block">
							<UpdateReservation
								ReservationDetail={ReservationDetail}
								params={params}
							/>
							<DeleteReservation params={params} />
						</div>
					) : null}
				</div>
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	return [{rid: '001'}, {rid: '002'}, {rid: '003'}, {rid: '004'}];
}
