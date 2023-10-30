import CreateUsers from '../components/create.component';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Create Page',
};
export default function page() {
	return (
		<main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
			<CreateUsers />
		</main>
	);
}
