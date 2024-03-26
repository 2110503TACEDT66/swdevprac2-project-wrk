'use client';
import {Button, TextField} from '@mui/material';
import userRegister from '@/libs/userRegister';
import userLogin from '@/libs/userLogin';
import {useState} from 'react';
import {useRouter} from 'next/navigation';
import {FormControl} from '@mui/material';
import {InputLabel} from '@mui/material';
import {OutlinedInput} from '@mui/material';

export default function RegisterPage() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [tel, setTel] = useState('');
	const router = useRouter();
	const handleSignUp = async () => {
		console.log(name, email, password, tel);
		try {
			await userRegister(name, email, password, tel);
			alert('Register success');
			router.push('/api/auth/signin');
		} catch (error) {
			alert('Register failed');
			console.error('Register failed', error);
			console.log('error');
		}
	};

	return (
		<div className="flex flex-col items-center w-[100vw] rounded-lg">
			<h1 className="m-5 text-black text-2xl font-semibold text-center">
				Register
			</h1>
			<div className="m-5 w-1/3">
				<TextField
					variant="outlined"
					label="Name"
					value={name}
					onChange={(e) => {
						setName(e.target.value);
					}}
					placeholder="username"
					className="w-full"
				/>
			</div>
			<div className="m-5 w-1/3">
				<TextField
					variant="outlined"
					label="Email"
					value={email}
					onChange={(e) => {
						setEmail(e.target.value);
					}}
					placeholder="example@domain"
					className="w-full"
				/>
			</div>
			<div className="m-5 w-1/3">
				<TextField
					variant="outlined"
					label="Password"
					value={password}
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					placeholder="password at least 6 characters"
					className="w-full"
				/>
			</div>
			<div className="m-5 w-1/3">
				<TextField
					variant="outlined"
					label="Tel."
					value={tel}
					onChange={(e) => {
						setTel(e.target.value);
					}}
					placeholder="000-000-0000"
					className="w-full"
				/>
			</div>
			<button
				onClick={handleSignUp}
				className="bg-orange-400 m-5 p-3 px-5 text-black-500 border border-orange-500 rounded rounded-xl hover:bg-gray-500 hover:text-white hover:border-transparent "
			>
				Register
			</button>
		</div>
	);
}
