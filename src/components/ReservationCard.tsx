import styles from './productcard.module.css';
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

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

export default function ReservationCard({
    data
}: {
	data : reservationItem
}) {
	return (
		<InteractiveCard contentName={data.user}>
			<div className="w-full h-full relative rounded-lg">
				{/* <Image
					src={imgSrc}
					alt="Product Picture"
					fill={true}
					className="object-cover rounded-lg w-16 md:w-32 lg:w-48"
				/> */}
				<div className="absolute z-50 p-[10px] m-[10px] bg-orange-500 rounded rounded-xl text-xl text-white font-semibold">
					<div>{data.coWork}</div>
					<div>{data.startTime}</div>
					<div>{data.endTime}</div>
				</div>
			</div>
		</InteractiveCard>
	);
}