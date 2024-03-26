'use client';
import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './RegisterPage.module.css'; // Import CSS module for styling
import router from 'next/router';
import Link from 'next/link';

export default function RegisterPage() {
	const [formData, setFormData] = useState({
		name: '',
		address: '',
		district: '',
		province: '',
		postalcode: '',
		region: '',
		tel: '',
		opentime: '',
		closetime: '',
		picture: '',
	});

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {name, value} = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		// Perform registration logic here, such as sending data to backend
		console.log(formData); // For demonstration, you can replace this with your registration logic
	};

	return (
		<div className={styles.container}>
			{' '}
			{/* Apply container class for centering */}
			<form onSubmit={handleSubmit} className={styles.form}>
				{' '}
				{/* Apply form class for styling */}
				<div className={styles.formGroup}>
					{' '}
					{/* Apply formGroup class for styling */}
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						id="name"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="address">Address:</label>
					<input
						type="text"
						id="address"
						name="address"
						value={formData.address}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="district">District:</label>
					<input
						type="text"
						id="district"
						name="district"
						value={formData.district}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="province">Province:</label>
					<input
						type="text"
						id="province"
						name="province"
						value={formData.province}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="postalcode">Postalcode:</label>
					<input
						type="text"
						id="postalcode"
						name="postalcode"
						value={formData.postalcode}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="region">region:</label>
					<input
						type="text"
						id="region"
						name="region"
						value={formData.region}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="tel">Tel:</label>
					<input
						type="tel"
						id="tel"
						name="tel"
						value={formData.tel}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="opentime">Opentime:</label>
					<input
						type="time"
						id="opentime"
						name="opentime"
						value={formData.opentime}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="closetime">Closetime:</label>
					<input
						type="time"
						id="closetime"
						name="closetime"
						value={formData.closetime}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="picture">picture:</label>
					<input
						type="text"
						id="picture"
						name="picture"
						value={formData.picture}
						onChange={handleChange}
						required
					/>
				</div>
				<Link href="/car">
					<button type="submit" className={styles.submitButton}>
						Add New CoWork
					</button>
				</Link>
				{/* Apply submitButton class for styling */}
			</form>
		</div>
	);
}
