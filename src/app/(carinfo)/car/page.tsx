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

	var Role = null;

	if (proflie.data.role === 'admin') Role = 1;

	return (
		<main className="text-center p-5">
			<h1 className="text-xl font-medium">Select Your Co-Working Space</h1>
			<CoworkCatalog CoworkJson={Coworks} />
			{Role ? <CoWork /> : null}
		</main>
	);
}
