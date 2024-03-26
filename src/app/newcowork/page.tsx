'use client';
import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './RegisterPage.module.css'; // Import CSS module for styling
import router from 'next/router';
import Link from 'next/link';

export default function RegisterPage() {
	return (
		<form className="my-[10%] mx-[25%] w-[80%] h-[60%]">
			<div className="text-xl text-orange-500 font-medium m-5">New Co-Working Space</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Name">
					Name
				</label>
				<input
					type="text"
					required
					id="Name"
					name="Name"
					placeholder="enter name"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Address">
					Address
				</label>
				<input
					type="text"
					required
					id="Address"
					name="Address"
					placeholder="Address"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="District">
					District
				</label>
				<input
					type="text"
					required
					id="District"
					name="District"
					placeholder="District"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Province">
				Province
				</label>
				<input
					type="text"
					required
					id="Province"
					name="Province"
					placeholder="Province"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Postalcode">
				Postalcode
				</label>
				<input
					type="text"
					required
					id="Postalcode"
					name="Postalcode"
					placeholder="Postalcode"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Region">
				Postalcode
				</label>
				<input
					type="text"
					required
					id="Region"
					name="Region"
					placeholder="Region"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Tel">
				Tel
				</label>
				<input
					type="text"
					required
					id="Tel"
					name="Tel"
					placeholder="phone number"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Open time">
				Open time
				</label>
				<input
					type="text"
					required
					id="Open-time"
					name="Open-time"
					placeholder="open time"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Close time">
				Close time
				</label>
				<input
					type="text"
					required
					id="Close-time"
					name="Close-time"
					placeholder="close time"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-1/5 block text-gray-700 pr-4" htmlFor="Picture">
				Picture
				</label>
				<input
					type="text"
					required
					id="Picture"
					name="Picture"
					placeholder="Picture URL"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<button
				type="submit"
				className="bg-orange-500 hover:bg-orange-600 text-white p-2 rounded m-5"
			>
				Add New CoWorking Space 
			</button>
		</form>
	);
}
