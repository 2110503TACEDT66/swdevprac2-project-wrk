'use client';
import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './RegisterPage.module.css'; // Import CSS module for styling
import router from 'next/router';

export default function RegisterPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		password: '',
		tel: '',
		role: 'user', // Default role
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
					<label htmlFor="email">Email:</label>
					<input
						type="email"
						id="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div className={styles.formGroup}>
					<label htmlFor="password">Password:</label>
					<input
						type="password"
						id="password"
						name="password"
						value={formData.password}
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
				<button
					type="submit"
					className={styles.submitButton}
					onClick={(e) => {
						e.stopPropagation();
						router.push('/api/auth/signin');
					}}
				>
					Register
				</button>{' '}
				{/* Apply submitButton class for styling */}
			</form>
		</div>
	);
}
