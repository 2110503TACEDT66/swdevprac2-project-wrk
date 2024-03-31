export default async function deleteReservation(token: string, rid: string) {
	const response = await fetch(
		`${process.env.BACKEND_URL}/api/v1/reservation/${rid}`,
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
