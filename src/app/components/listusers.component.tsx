'use client';

import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { deleteUser } from '../../../api';

export default function ListUsers() {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		// Use `fetch` directly instead of `cache` for client-side fetching
		fetch('http://localhost:3000/api/users')
			.then(res => res.json())
			.then(users => setUsers(users));
	}, []);
	const Router = useRouter();

	const editUsers = async (id: string) => {
		// Refresh users after deletion
		fetch('http://localhost:3000/api/users')
			.then(res => res.json())
			.then(setUsers);

		Router.refresh();
	};

	const handleDeleteUser = async (id: string) => {
		await deleteUser(id);
		// Refresh users after deletion
		fetch('http://localhost:3000/api/users')
			.then(res => res.json())
			.then(setUsers);

		Router.refresh();
	};
	return (
		<>
			<button
				className='group mb-5 relative h-12 w-48 overflow-hidden rounded-2xl bg-green-500 text-lg font-bold text-white '
				type='button'
				onClick={() => Router.push('/create')}
			>
				Add users
			</button>
			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '1fr 1fr 1fr 1fr',
					gap: 20,
				}}
			>
				{users.map(user => (
					<div
						key={user.id}
						style={{ border: '1px solid #ccc', textAlign: 'center' }}
					>
						<img
							src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
							alt={user.name}
							style={{ height: 180, width: 180 }}
						/>
						<h3>{user.name}</h3>
						<h3>{user.role}</h3>
						<button
							className='group flex h-5 text-center w-5 overflow-hidden  bg-red-500 text-lg font-bold text-white'
							onClick={() => handleDeleteUser(user.id)}
						>
							<AiFillDelete />
						</button>
					</div>
				))}
			</div>
		</>
	);
}
