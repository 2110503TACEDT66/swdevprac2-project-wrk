import ProductCard from './ProductCard';
import Link from 'next/link';

export default async function CarCatalog({carJson}: {carJson: object}) {
	const carJsonRedy = await carJson;

	return (
		<>
			Explore {carJsonRedy.count} co-working space in our catalog
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
				{carJsonRedy.data.map((carItem: Object) => (
					<Link href={`/car/${carItem.id}`} className="w-1/5">
						<ProductCard carName={carItem.name} imgSrc={carItem.picture} />
					</Link>
				))}
			</div>
		</>
	);
}
