import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
	const cart = await prisma.cart.findMany();
	return NextResponse.json(cart);
}

export async function POST(request: Request) {
	try {
		const json = await request.json();

		const cart = await prisma.cart.create({
			data: json,
		});

		return new NextResponse(JSON.stringify(cart), {
			status: 201,
			headers: { 'Content-Type': 'application/json' },
		});
	} catch (error: any) {
		if (error.code === 'P2002') {
			return new NextResponse('cart with email already exists', {
				status: 409,
			});
		}
		return new NextResponse(error.message, { status: 500 });
	}
}
