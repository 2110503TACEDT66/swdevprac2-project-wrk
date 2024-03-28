
import Image from 'next/image';
import getCowork from '@/libs/getCowork';
import Link from 'next/link';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';
import UpdateCoWork from '@/components/UpdateCoWork';
import DeleteCoWork from '@/components/DeleteCoWork';
import router from 'next/navigation';

export default async function CoworkDetailPage({
	params,
}: {
	params: {cid: string};
}) {
	const CoworkDetail = await getCowork(params.cid);

	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const proflie = await getUserProfile(session.user.token);
	return (
		<main className="text-center p-5">
			<h1 className="text-lg font-medium ">{CoworkDetail.data.name}</h1>
			<div className="flex flex-row my-5 flex-wrap ml-[15%] w-[100%]">
				<Image
					src={CoworkDetail.data.picture}
					alt="CoWork Image"
					width={0}
					height={0}
					sizes="100vw"
					className="rounded-lg w-[30%]"
				/>
				<div className="text-md mx-5 text-left m-5 ml-[5%] w-[50%]">
					<div className="text-md m-5">
						Location : {CoworkDetail.data.address}
					</div>

					<div className="text-md m-5">
						District : {CoworkDetail.data.district}
					</div>
					<div className="text-md m-5">Region : {CoworkDetail.data.region}</div>
					<div className="text-md m-5">
						Open time: {CoworkDetail.data.Open_time}
					</div>
					<div className="text-md m-5">
						Close time: {CoworkDetail.data.Close_time}
					</div>
					<div className="text-md m-5">Tel: {CoworkDetail.data.tel}</div>

					<Link
						href={`/cowork/${params.cid}/addreservation`}
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
							<UpdateCoWork CoworkDetail={CoworkDetail} params={params} />
							<DeleteCoWork params={params} />
						</div>
					) : null}
				</div>
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	return [{cid: '001'}, {cid: '002'}, {cid: '003'}, {cid: '004'}];
}
