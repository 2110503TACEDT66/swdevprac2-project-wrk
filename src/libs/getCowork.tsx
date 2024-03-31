export default async function getCowork(id: string) {
	const response = await fetch(
		`${process.env.BACKEND_URL}/api/v1/coWork/${id}`
	);
	if (!response.ok) {
		throw new Error('Failed to fetch cowork');
	}

	return await response.json();
}
