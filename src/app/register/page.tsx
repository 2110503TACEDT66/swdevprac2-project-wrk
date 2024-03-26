import User from '@/db/models/User';
import {dbConnect} from '@/db/dbConnect';
import {revalidateTag} from 'next/cache';
import {redirect} from 'next/navigation';

export default async function RegisterPage() {
	const addUser = async (addUserForm: FormData) => {
		'use server';
		const name = addUserForm.get('name');
		const email = addUserForm.get('email');
		const password = addUserForm.get('password');
		const tel = addUserForm.get('tel');
		const role = addUserForm.get('role');

		try {
			await dbConnect();
			const user = await User.create({
				name: name,
				email: email,
				password: password,
				tel: tel,
				role: role,
			});
			console.log(user);
		} catch (error) {
			console.log(error);
		}
		revalidateTag('users');
		redirect('/api/auth/signin');
	};

	return (
		<div className="flex flex-col w-[100vw] h-[100vh] ml-[25%] mt-[5%]">
			<form action={addUser} className="w-[100%] h-[80%] ">
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
					className=" w-[50%] my-[2%] p-2 bg-orange-500 hover:bg-orange-700 text-white text-center rounded"
				>
					Register
				</button>
			</form>
		</div>
	);
}
