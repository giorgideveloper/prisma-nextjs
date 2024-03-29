import Card from './components/card.component';
import Carusel from './components/carusel.component';

export default async function Home() {
	return (
		<>
			<div className='container mx-auto'>
				<Carusel />
				<div className='grid  lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 justify-center  mt-10 gap-4'>
					<Card />
				</div>
			</div>
		</>
	);
}
