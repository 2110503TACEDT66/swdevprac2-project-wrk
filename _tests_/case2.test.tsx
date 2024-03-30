import Banner from '@/components/Banner';
import {render, screen} from '@testing-library/react';
import {userEvent} from '@testing-library/user-event';
describe('Banner', () => {
	const covers = ['cover1.jpg', 'cover2.jpg', 'cover3.jpg', 'cover4.jpg'];
	it(' Should change image when click  banner', async () => {
		render(<Banner />);
		const banner = screen.getByRole('img') as HTMLImageElement;
		for (let i = 0; i < covers.length; i++) {
			await userEvent.click(banner);
			expect(banner.src).toContain(covers[(i + 1) % 4]);
		}
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
