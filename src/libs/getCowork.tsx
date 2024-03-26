export default async function getCowork(id: string) {
	const response = await fetch(`http://localhost:5050/api/v1/coWork/${id}`);
	if (!response.ok) {
		throw new Error('Failed to fetch cowork');
	}

	return await response.json();
}
