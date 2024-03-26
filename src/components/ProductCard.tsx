import styles from './productcard.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ProductCard({
	carName,
	imgSrc,
	onCompare,
}: {
	carName: string;
	imgSrc: string;
	onCompare?: Function;
}) {
	return (
		<InteractiveCard contentName={carName}>
			<div className="w-full h-full relative rounded-lg">
				<Image
					src={imgSrc}
					alt="Product Picture"
					fill={true}
					className="object-cover rounded-lg"
				/>
				<div className="absolute z-50 p-[10px] m-[10px] bg-orange-500 rounded rounded-xl text-xl text-white font-semibold">
					{carName}
				</div>
			</div>
		</InteractiveCard>
	);
}
