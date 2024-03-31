import {coworkObj} from '@/components/CoworkCatalog';
import {resolve} from 'path';

export default async function getCoWorks(): Promise<coworkObj> {
	const response = await fetch(`${process.env.BACKEND_URL}/api/v1/coWork`, {
		next: {tags: ['coWorks']},
	});

	if (!response.ok) {
		throw new Error('Failed to fetch cars');
	}

	return await response.json();
}
