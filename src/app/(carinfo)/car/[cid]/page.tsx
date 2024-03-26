import Image from 'next/image';
import getCowork from '@/libs/getCowork';
import Link from 'next/link';

export default async function CoworkDetailPage({
	params,
}: {
	params: {cid: string};
}) {
	const CoworkDetail = await getCowork(params.cid);
	return (
		<main className="text-center p-5">
			<h1 className="text-lg font-medium">{CoworkDetail.data.name}</h1>
			<div className="flex flex-row my-5">
				<Image
					src={CoworkDetail.data.picture}
					alt="Car Image"
					width={0}
					height={0}
					sizes="100vw"
					className="rounded-lg w-[30%]"
				/>
				<div className="text-md mx-5 text-left">
					{CoworkDetail.data.address}
					<div className="text-md mx-5">{CoworkDetail.data.district}</div>
					<div className="text-md mx-5">{CoworkDetail.data.region}</div>
					<div className="text-md mx-5">
						Open time: {CoworkDetail.data.Open_time}
					</div>
					<div className="text-md mx-5">
						Close time:{CoworkDetail.data.Close_time}
					</div>
					<div className="text-md mx-5">Tel: {CoworkDetail.data.tel}</div>

					<Link href={`/reservations?id=${params.cid}&name=${CoworkDetail.data.name}`}>
                    <button className="block rounded-md bg-orange-400 hover:bg-orange-600 px-3 py-1
                    text-white shadow-sm">
                        Make a Reservation
                    </button>
                </Link>
				</div>
			</div>
		</main>
	);
}

export async function generateStaticParams() {
	return [{cid: '001'}, {cid: '002'}, {cid: '003'}, {cid: '004'}];
}
