import {useState, ChangeEvent, FormEvent} from 'react';
import styles from './RegisterPage.module.css'; // Import CSS module for styling
import router from 'next/router';
import Link from 'next/link';
import CoWork from '@/db/models/CoWork';
import { dbConnect } from '@/db/dbConnect';
import { revalidateTag } from 'next/cache';
import { redirect } from 'next/navigation';

export default async function RegisterPage() {

	const addCoWork = async (addCoWorkForm:FormData) => {
		"use server"
		const name = addCoWorkForm.get("Name")
        const address= addCoWorkForm.get("Address")
        const district= addCoWorkForm.get("District")
        const province= addCoWorkForm.get("Province")
        const postalcode= addCoWorkForm.get("Postalcode")
        const region= addCoWorkForm.get("Region")
        const tel= addCoWorkForm.get("Tel")
        const Open_time = addCoWorkForm.get("Open-time")
        const Close_time= addCoWorkForm.get("Close-time")
        const picture= addCoWorkForm.get("Picture")

		try{
			await dbConnect()
			const coWork = await CoWork.create({
				name:  name,
            	address: address,
            	district: district,
            	province: province,
            	postalcode: postalcode,
            	region: region,
            	tel: tel,
            	Open_time :Open_time,
            	Close_time :Close_time,
            	picture :picture
			})
		}catch(error){
			console.log(error)
		}
		revalidateTag("coWorks")
		redirect("/car")
	}

	return (
		<form action={addCoWork} className="my-[10%] mx-[25%] w-[80%] h-[60%]">
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
				Region
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
