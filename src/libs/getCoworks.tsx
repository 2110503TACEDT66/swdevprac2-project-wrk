import {promises} from 'fs';
import {resolve} from 'path';

export default async function getCoWorks() {
	await new Promise((resolve) => setTimeout(resolve, 5000));

	const response = await fetch('http://localhost:5050/api/v1/coWork');
	if (!response.ok) {
		throw new Error('Failed to fetch cars');
	}

	return await response.json();
}