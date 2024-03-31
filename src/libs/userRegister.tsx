export default async function userRegister(
	userName: string,
	userEmail: string,
	userPassword: string,
	userTel: string
) {
	const response = await fetch('https://presentation-day-1-pqbs826g9-wrk-c44e290c.vercel.app/api/v1/auth/register', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			name: userName,
			email: userEmail,
			password: userPassword,
			tel: userTel,
		}),
	});

	if (!response.ok) {
		throw new Error('Failed to Register');
	}

	return await response.json();
}
