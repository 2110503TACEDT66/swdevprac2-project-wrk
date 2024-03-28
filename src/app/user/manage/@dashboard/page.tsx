import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';

export default async function DashboardPage() {
	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const proflie = await getUserProfile(session.user.token);
	var createdAt = new Date(proflie.data.createdAt);

	return (
		<main className="block bg-slate-100 mx-auto my-[5vh] p-5 align-middle  h-fit rounded rounded-xl item-center border border-5 border-orange-400">
			<div className="text-2xl text-center ">{proflie.data.name}</div>
			<table className="table-auto border-separate border-spacing-2 w-fit p-[3%] mx-auto ">
				<tbody>
					<tr>
						<td className="w-[8vw] p-1" >Email</td>
						<td className="w-[30vw] p-1">{proflie.data.email}</td>
					</tr>
					<tr>
						<td className="w-[8vw] p-1">Tel.</td>
						<td className="w-[30vw] p-1">{proflie.data.tel}</td>
					</tr>
					<tr>
						<td className="w-[8vw] p-1">Member Since</td>
						<td className="w-[30vw] p-1">{createdAt.toString()}</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
}
