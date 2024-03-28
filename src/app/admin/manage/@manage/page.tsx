export default function ManagePage() {
	return (
		<form className=" mx-[25%] w-[80%] h-[60%]">
			<div className="text-xl text-blue-700">Add New Reservation</div>
			<div className="flex items-center w-1/2 my-2 ">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="name">
					{' '}
					Name
				</label>
				<input
					type="text"
					required
					id="name"
					name="name"
					placeholder="co-working space name"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="address">
					Address
				</label>
				<input
					type="text"
					required
					id="address"
					name="address"
					placeholder="address"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="district">
					{' '}
					District
				</label>
				<input
					type="text"
					required
					id="district"
					name="district"
					placeholder="district"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="province">
					{' '}
					Province
				</label>
				<input
					type="text"
					required
					id="province"
					name="province"
					placeholder="province"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="postalcode">
					{' '}
					Postalcode
				</label>
				<input
					type="text"
					required
					id="postalcode"
					name="postalcode"
					placeholder="postalcode"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="tel">
					{' '}
					Tel
				</label>
				<input
					type="text"
					required
					id="tel"
					name="tel"
					placeholder="phone-number"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="region">
					{' '}
					Region
				</label>
				<input
					type="text"
					required
					id="region"
					name="region"
					placeholder="region"
					className="bg-white border-2 border-gray-200 rounded w-full p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
			</div>
			<div className="flex items-center w-1/2 my-2">
				<label className="w-auto block text-gray-700 pr-4" htmlFor="seats">
					{' '}
					Open Time
				</label>
				<input
					type="text"
					required
					id="open_time"
					name="open_time"
					placeholder="XX:XX"
					min={0}
					max={50}
					className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
				<label className="w-auto block text-gray-700 pr-4 m1-5" htmlFor="doors">
					{' '}
					Close Time
				</label>
				<input
					type="text"
					required
					id="close_time"
					name="close_time"
					placeholder="XX:XX"
					min={0}
					max={8}
					className="bg-white border-2 border-gray-200 rounded w-auto p-2 text-gray-700 focus: outline-none focus: border-blue-400"
				/>
				{/* <input
					className="ml-5 mr-2"
					id="automatic"
					name="automatic"
					type="checkbox"
				/>{' '}
				<span>Auto</span> */}
			</div>
			{/* <div className="flex items-center w-1/2 my-2">
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
			</div> */}
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
			<button
				type="submit"
				className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded"
			>
				Add New Co-Working Space
			</button>
		</form>
	);
}
