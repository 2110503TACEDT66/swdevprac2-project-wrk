export interface coworkObj {
	success: boolean;
	count: number;
	pagination: Record<string, any>; // Since the structure is unknown
	data: coworkItem[];
}

interface coworkItem {
	success: boolean;
	count: number;
	pagination: Record<string, any>; // Since the structure is unknown
	data: reservationItem[];
}
interface reservationItem {
	_id: string;
	user: string;
	coWork: string;
	date: string;
	startTime: string;
	endTime: string;
	table: string;
	createdAt: string;
	__v: number;
}

interface coworkItem {
	_id: string;
	name: string;
	address: string;
	district: string;
	province: string;
	postalcode: string;
	region: string;
	tel: string;
	Open_time: string;
	Close_time: string;
	picture: string;
	__v: number;
	reservations: reservationItem[];
	id: string;
}

import ProductCard from './ProductCard';
import Link from 'next/link';

export default async function CarCatalog({
	CoworkJson,
}: {
	CoworkJson: coworkObj;
}) {
	const carJsonRedy = await CoworkJson;

	return (
		<>
			Explore {carJsonRedy.count} coWorks in our catalog
			<div
				style={{
					margin: '20px',
					display: 'flex',
					flexDirection: 'row',
					flexWrap: 'wrap',
					justifyContent: 'space-around',
					alignContent: 'space-around',
				}}
			>
				{carJsonRedy.data.map((carItem: coworkItem) => (
					<Link href={`/car/${carItem.id}`} className="w-1/5">
						<ProductCard carName={carItem.name} imgSrc={carItem.picture} />
					</Link>
				))}
			</div>
		</>
	);
}
