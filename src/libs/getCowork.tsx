export default async function getCowork(id: string) {
	const response = await fetch(`https://presentation-day-1-pqbs826g9-wrk-c44e290c.vercel.app/api/v1/coWork/${id}`);
	if (!response.ok) {
		throw new Error('Failed to fetch cowork');
	}

	return await response.json();
}
