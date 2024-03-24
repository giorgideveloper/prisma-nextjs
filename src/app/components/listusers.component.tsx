'use client';

import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Tables from './table.components';

export default function ListUsers() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		// Use `fetch` directly instead of `cache` for client-side fetching
		fetch('http://localhost:3000/api/users')
			.then(res => res.json())
			.then(users => setUsers(users));
	}, []);
	const Router = useRouter();

	return (
		<>
			<button
				className='btn btn-warning'
				type='button'
				onClick={() => Router.push('/create')}
			>
				Add users
			</button>

			<Tables users={users} setUsers={setUsers} />
		</>
	);
}
