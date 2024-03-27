import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import Link from 'next/link';
import deleteReservation from '@/libs/deleteReservation';

export default async function DeleteReservationPage({
	params,
}: {
	params: {cid: string};
}) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return;

	const res = await deleteReservation(session.user.token, params.cid);
	console.log(res);
	return (
		<main className="text-center">
			<div className="bg-slate-200 rounded-lg mx-5 px-5 py-5 my-2">
				Your reservation was successfully deleted.
			</div>

			<Link href={`/cowork`}>
				<button className="rounded-md bg-orange-400 mx-2 my-5 hover:bg-red-700 px-3 py-2 text-white shadow-sm">
					Back to cart
				</button>
			</Link>
		</main>
	);
}
