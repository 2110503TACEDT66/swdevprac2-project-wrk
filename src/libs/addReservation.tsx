export default async function addReservation(
	token: string,
	coworkId: string,
	user: string,
	date: string,
	startTime: string,
	endTime: string,
	table: string
) {
	const response = await fetch(
		`https://presentation-day-1-pqbs826g9-wrk-c44e290c.vercel.app/api/v1/coWork/${coworkId}/reservations/`,
		{
			method: 'POST',
			headers: {
				authorization: `Bearer ${token}`,
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				user: user,
				date: date,
				startTime: startTime,
				endTime: endTime,
				table: 'A5',
			}),
		}
	);

	const json = await response.json();

	if (!response.ok) {
		throw new Error(json.message);
	}
	return json;
}
