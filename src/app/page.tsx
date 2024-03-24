import ListUsers from './components/listusers.component';
import Card from './components/card.component';

export default async function Home() {
	return (
		<>
			<div className='container mx-auto'>
				<div className='grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center  mt-10 gap-4'>
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	);
}
