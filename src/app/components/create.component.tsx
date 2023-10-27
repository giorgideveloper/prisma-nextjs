'use client';

import { User } from '@prisma/client';
import React, { cache, use } from 'react';

const getUsers = cache(() =>
	fetch('http://localhost:3000/api/users').then(res => res.json())
);

export default function CreateUsers() {
	let users = use<User[]>(getUsers());

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: '1fr 1fr 1fr 1fr',
				gap: 1,
			}}
		>
			<label>name</label>
			<input type='text' />
		</div>
	);
}
