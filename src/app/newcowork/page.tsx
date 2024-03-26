'use client';
import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './RegisterPage.module.css'; // Import CSS module for styling
import router from 'next/router';
import Link from 'next/link';

export default function RegisterPage() {
	return (
		<form className="my-[10%] mx-[25%] w-[80%] h-[60%]">
			<div className="text-xl text-blue-700">Add New Co-Working Space</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="model">
					{' '}
					Model
				</label>
				<input
					type="text"
					required
					id="model"
					name="model"
					placeholder="Car Model"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="desc">
					Description
				</label>
				<input
					type="text"
					required
					id="desc"
					name="desc"
					placeholder="Car Description"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="picture">
					{' '}
					Picture
				</label>
				<input
					type="text"
					required
					id="picture"
					name="picture"
					placeholder="URL"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="seats">
					{' '}
					Seats
				</label>
				<input
					type="number"
					required
					id="seats"
					name="seats"
					placeholder="4"
					min={0}
					max={50}
					className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
				<label className="w-auto block text-gray-700 pr-4 m1-5" htmlFor="doors">
					{' '}
					Doors
				</label>
				<input
					type="number"
					required
					id="doors"
					name="doors"
					placeholder="4"
					min={0}
					max={8}
					className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
				<input
					className="ml-5 mr-2"
					id="automatic"
					name="automatic"
					type="checkbox"
				/>{' '}
				<span>Auto</span>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="largebags">
					{' '}
					Large Bags
				</label>
				<input
					type="number"
					required
					id="largebags"
					name="largebags"
					placeholder="2"
					min={0}
					max={10}
					className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
				<label
					className="w-auto block text-gray-700 pr-4 ml-5"
					htmlFor="smallbags"
				>
					{' '}
					Small Bags
				</label>
				<input
					type="number"
					required
					id="smallbags"
					name="smallbags"
					placeholder="2"
					min={0}
					max={10}
					className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="dayRate">
					{' '}
					Rate
				</label>
				<input
					type="text"
					required
					id="dayRate"
					name="dayRate"
					placeholder="Daily Rate (including insurance)"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
			>
				Add New Car
			</button>
		</form>
	);
}
