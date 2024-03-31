export default async function deleteReservation(token: string, rid: string) {
	const response = await fetch(
		`https://presentation-day-1-pqbs826g9-wrk-c44e290c.vercel.app/api/v1/reservation/${rid}`,
		{
			method: 'DELETE',
			headers: {
				authorization: `Bearer ${token}`,
			},
		}
	);

	if (!response.ok) {
		throw new Error('Failed to Delete Reservation');
	}

	return await response.json();
}
