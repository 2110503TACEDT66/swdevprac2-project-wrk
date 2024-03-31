import Banner from '@/components/Banner';
import {render, screen} from '@testing-library/react';

describe('Banner', () => {
	it('Should Have Title', () => {
		render(<Banner />);
		const bannerText = screen.getByText('Find Your Lovely Co-Working Space');
		expect(bannerText).toBeInTheDocument();
	});
});

// Mock useRouter
jest.mock('next/navigation', () => ({
	useRouter() {
		return {
			prefetch: () => null,
		};
	},
}));

// Mock useSession
jest.mock('next-auth/react', () => ({
	useSession() {
		return {data: null, user: {name: 'Tester'}};
	},
}));
