const getData = async () => {
	try {
		const response = await fetch(`http://localhost:3000/api/cart`, {
			cache: 'no-store',
		});
		if (!response.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await response.json();

		return data;
	} catch (error) {
		console.error('Error fetching data:', error);

		return null;
	}
};

export default async function Card() {
	const apiData = await getData();
	console.log('sss', apiData);
	return (
		<>
			{apiData?.map((item: any) => (
				<div
					className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'
					key={item.id}
				>
					<a href='#'>
						<img
							className='p-8 rounded-t-lg'
							src={item.image}
							alt='product image'
						/>
					</a>
					<div className='px-5 pb-5'>
						<a href='#'>
							<h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>
								{item.name}
							</h5>
						</a>
						<div className='flex items-center mt-2.5 mb-5'>
							<div className='flex items-center space-x-1 rtl:space-x-reverse'>
								{/* Your rating SVG icons */}
							</div>
							<span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>
								{item.rate}
							</span>
						</div>
						<div className='flex items-center justify-between'>
							<span className='text-3xl font-bold text-gray-900 dark:text-white'>
								${item.price}
							</span>
							<a
								href='#'
								className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
							>
								Add to cart
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
}
