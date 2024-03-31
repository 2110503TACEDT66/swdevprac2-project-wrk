export default async function getReservation(token: string, rid: string) {
	const response = await fetch(
		`https://presentation-day-1-pqbs826g9-wrk-c44e290c.vercel.app/api/v1/reservation/${rid}`,
		{
			method: 'GET',
			headers: {
				authorization: `Bearer ${token}`,
			},
		}
	);
	if (!response.ok) {
		throw new Error('Failed to fetch reservation');
	}

	return await response.json();
}
