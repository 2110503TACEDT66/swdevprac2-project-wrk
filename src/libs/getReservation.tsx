export default async function getReservation(token: string, rid: string) {
	const response = await fetch(
		`http://localhost:5050/api/v1/reservation/${rid}`,
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
