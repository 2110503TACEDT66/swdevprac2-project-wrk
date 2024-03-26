import Image from 'next/image';
import Banner from '@/components/Banner';
import ProductCard from '@/components/ProductCard';
import styles from './page.module.css';
import {TravelCard} from '@/components/TravelCard';

export default function Home() {
	return (
		<main>
			<Banner />
		</main>
	);
}
