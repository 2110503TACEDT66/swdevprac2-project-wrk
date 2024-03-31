export default async function userRegister(
	userName: string,
	userEmail: string,
	userPassword: string,
	userTel: string
) {
	const response = await fetch('http://localhost:5050/api/v1/auth/register', {
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
