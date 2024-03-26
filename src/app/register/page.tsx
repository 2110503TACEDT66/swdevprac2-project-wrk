'use client';
import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './RegisterPage.module.css'; // Import CSS module for styling
import router from 'next/router';
import Link from 'next/link';

export default function RegisterPage() {
	return (
		<form className="my-[10%] mx-[25%] w-[100%] h-[80%]">
			<div className="text-xl text-blue-700">Register</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="name">
					Name
				</label>
				<input
					type="text"
					required
					id="name"
					name="name"
					placeholder="username"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="email">
					Email
				</label>
				<input
					type="text"
					required
					id="email"
					name="email"
					placeholder="email"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="password">
					Password
				</label>
				<input
					type="password"
					required
					id="password"
					name="password"
					placeholder="password"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label
					className="w-auto block text-gray-700 pr-4"
					htmlFor="verify-password"
				>
					Verify-Password
				</label>
				<input
					type="password"
					required
					id="verify-password"
					name="verify-password"
					placeholder="verify-password"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="tel">
					Tel
				</label>
				<input
					type="text"
					required
					id="tel"
					name="tel"
					placeholder="tel"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="role">
					Role
				</label>
				<input
					type="text"
					id="role"
					name="role"
					placeholder=""
					value="user"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
			>
				Register
			</button>
		</form>
	);
}
