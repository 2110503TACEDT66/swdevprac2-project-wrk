'use client';
import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './RegisterPage.module.css'; // Import CSS module for styling
import router from 'next/router';
import Link from 'next/link';

export default function RegisterPage() {
	return (
		<div className="flex flex-col w-[100vw] h-[100vh] ml-[25%] mt-[5%]">
			<form className="w-[100%] h-[80%] ">
				<div className=" text-2xl text-orange-700 font-semibold my-[2%]">
					Register
				</div>
				<div className="flex items-center w-1/2 my-2 ">
					<label
						className="w-[200px] block text-gray-700 text-right pr-[5%]"
						htmlFor="name"
					>
						Name
					</label>
					<input
						type="text"
						required
						id="name"
						name="name"
						placeholder="username"
						className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-orange-400"
					/>
				</div>
				<div className="flex items-center w-1/2 my-2">
					<label
						className="w-[200px] block text-gray-700 text-right pr-[5%]"
						htmlFor="email"
					>
						Email
					</label>
					<input
						type="text"
						required
						id="email"
						name="email"
						placeholder="email"
						className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-orange-400"
					/>
				</div>
				<div className="flex items-center w-1/2 my-2">
					<label
						className="w-[200px] block text-gray-700 text-right pr-[5%]"
						htmlFor="password"
					>
						Password
					</label>
					<input
						type="password"
						required
						id="password"
						name="password"
						placeholder="password"
						className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-orange-400"
					/>
				</div>
				<div className="flex items-center w-1/2 my-2">
					<label
						className="w-[200px] block text-gray-700 text-right pr-[5%]"
						htmlFor="tel"
					>
						Tel
					</label>
					<input
						type="text"
						required
						id="tel"
						name="tel"
						placeholder="tel"
						className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-orange-400"
					/>
				</div>
				<div className="flex items-center w-1/2 my-2">
					<label
						className="w-[200px] block text-gray-700 text-right pr-[5%]"
						htmlFor="role"
					>
						Role
					</label>
					<input
						type="text"
						id="role"
						name="role"
						value="user"
						readOnly
						className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-orange-400"
					/>
				</div>
				<button
					type="submit"
					className=" w-[50%] my-[2%] bg-orange-500 hover:bg-orange-700 text-white text-center rounded"
				>
					Register
				</button>
			</form>
		</div>
	);
}
