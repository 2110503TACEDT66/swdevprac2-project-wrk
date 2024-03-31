export default async function getReservations(token: string) {
	const response = await fetch(
		`${process.env.BACKEND_URL}/api/v1/reservation`,
		{
			method: 'GET',
			headers: {
				authorization: `Bearer ${token}`,
			},
		}
	);
	if (!response.ok) {
		throw new Error('Failed to fetch reservations');
	}

	return await response.json();
}
