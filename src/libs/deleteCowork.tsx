export default async function deleteCowork(token: string, cid: string) {
	const response = await fetch(`http://localhost:5050/api/v1/coworks/${cid}`, {
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
