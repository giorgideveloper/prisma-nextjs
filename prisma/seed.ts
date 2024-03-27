import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	try {
		const user = await prisma.user.upsert({
			where: { email: 'admin@admin.com' },
			update: {},
			create: {
				name: 'Admin',
				email: 'admin@admin.com',
				role: 'admin',
			},
		});

		console.log({ user });
	} catch (error) {
		console.error('Error in main:', error);
	}
}

async function cart() {
	try {
		const cart = await prisma.cart.upsert({
			where: { ownerId: '1' },
			update: {},
			create: {
				name: 'iphone',
				description: 'The best phone in the world',
				price: 100,
				image: '',
				rate: 5,
				ownerId: '1',
			},
		});
		console.log({ cart });
	} catch (error) {
		console.error('Error in cart:', error);
	}
}

async function run() {
	try {
		await cart();
		await main();
	} catch (error) {
		console.error('Error in run:', error);
	} finally {
		await prisma.$disconnect();
	}
}

run();
