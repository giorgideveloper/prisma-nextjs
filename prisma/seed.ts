import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	const user = await prisma.user.upsert({
		where: { email: 'admin@admin.com' },
		update: {},
		create: {
			name: 'Admin',
			email: 'admin@admin.com',
			role: 'admin',
		},
	});
	// const cart = await prisma.cart.upsert({
	// 	create: {
	// 		name: 'iphone',
	// 		description: 'The best phone in the world',
	// 		price: '100',
	// 		image: '',
	// 		rate: 5,
	// 	},
	// });
	// console.log({ cart });
	console.log({ user });
}

main()
	.then(() => prisma.$disconnect())
	.catch(async e => {
		console.error(e);
		await prisma.$disconnect();
		process.exit();
	});
