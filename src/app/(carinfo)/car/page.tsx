import getCoworks from '@/libs/getCoworks';
import CoworkCatalog from '@/components/CoworkCatalog';
import {Suspense} from 'react';
import {LinearProgress} from '@mui/material';
import {coworkObj} from '../../../components/CoworkCatalog';
export default function Cowork() {
	const Coworks = getCoworks();

	return (
		<main className="text-center p-5">
			<h1 className="text-xl font-medium">Select Your Co-Working Space</h1>
			<Suspense
				fallback={
					<p>
						Loading ...
						<LinearProgress />
					</p>
				}
			>
				<CoworkCatalog coworkJson={Coworks} />
			</Suspense>

			{/* <hr className="my-10 "/>
            <h1 className="text-xl font-medium">TRY Client-side Car Panel</h1>
            <CarPanel/> */}
		</main>
	);
}
