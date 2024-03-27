export default async function updateReservation(
	token: string,
	reservaionItem: any
) {
	const response = await fetch(
		`http://localhost:5050/api/v1/reservation/${reservaionItem.id}`,
		{
			method: 'PUT',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				Start_time: reservaionItem.Start_time,
				End_time: reservaionItem.End_time,
			}),
		}
	);

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}
	return json;
}
