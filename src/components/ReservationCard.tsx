import styles from './productcard.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function ReservationCard({
	coworkName,
	imgSrc,
	onCompare,
}: {
	coworkName: string;
	imgSrc: string;
	onCompare?: Function;
}) {
	return (
		<InteractiveCard contentName={coworkName}>
			<div className="w-full h-full relative rounded-lg">
				<Image
					src={imgSrc}
					alt="Product Picture"
					fill={true}
					className="object-cover rounded-lg w-16 md:w-32 lg:w-48"
				/>
				<div className="absolute z-50 p-[10px] m-[10px] bg-orange-500 rounded rounded-xl text-xl text-white font-semibold">
					{coworkName}
				</div>
			</div>
		</InteractiveCard>
	);
}