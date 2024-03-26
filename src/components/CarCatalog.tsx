import ProductCard from './ProductCard';
import Link from 'next/link';

interface Reservation {
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

interface CoworkingSpace {
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
	reservations: Reservation[];
	id: string;
}

interface CarJson {
	success: boolean;
	count: number;
	pagination: Record<string, any>; // Since the structure is unknown
	data: CoworkingSpace[];
}

export default async function CarCatalog({carJson}: {carJson: CarJson}) {
	const {count, data} = carJson;

	return (
		<>
			Explore {count} co-working space in our catalog
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
				{data.map((carItem) => (
					<Link key={carItem.id} href={`/car/${carItem.id}`} className="w-1/5">
						<ProductCard carName={carItem.name} imgSrc={carItem.picture} />
					</Link>
				))}
			</div>
		</>
	);
}
