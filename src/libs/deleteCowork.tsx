export default async function deleteCowork(token: string, cid: string) {
	const response = await fetch(`https://presentation-day-1-pqbs826g9-wrk-c44e290c.vercel.app/api/v1/coWork/${cid}`, {
		method: 'DELETE',
		headers: {
			authorization: `Bearer ${token}`,
		},
	});

	if (!response.ok) {
		throw new Error('Failed to Delete Co-Working Space');
	}

	return await response.json();
}
