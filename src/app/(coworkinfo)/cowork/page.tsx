import getCoworks from '@/libs/getCoworks';
import CoworkCatalog from '@/components/CoworkCatalog';
import CoWork from '@/components/Addcoworks';
import {getServerSession} from 'next-auth';
import {authOptions} from '@/app/api/auth/[...nextauth]/route';
import getUserProfile from '@/libs/getUserProfile';

export default async function AllCoWork() {
	const Coworks = await getCoworks();

	const session = await getServerSession(authOptions);
	if (!session || !session.user.token) return null;

	const proflie = await getUserProfile(session.user.token);


	return (
		<main className="text-center">
			<div className="text-3xl font-medium text-orange-500 m-5">Choose your way of working</div>
			<CoworkCatalog CoworkJson={Coworks} />
			{
				(proflie.data.role === 'admin')?
				<CoWork /> : null
			}
		</main>
	);
}
