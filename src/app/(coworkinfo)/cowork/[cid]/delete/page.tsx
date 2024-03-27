import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import deleteCowork from '@/libs/deleteCowork';
import Link from 'next/link';

export default async function DeleteCoworkPage({
	params,
}: {
	params: {cid: string};
}) {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return;

	deleteCowork(session.user.token, params.cid);

	return (
		<main className="text-center">
			<div className="bg-slate-200 rounded-lg mx-5 px-5 py-5 my-2">
				Your Co-Working Space was successfully deleted.
			</div>

			<Link href={`/cowork`}>
				<button className="rounded-md bg-orange-400 mx-2 my-5 hover:bg-red-700 px-3 py-2 text-white shadow-sm">
					Back to co-work catalog
				</button>
			</Link>
		</main>
	);
}
