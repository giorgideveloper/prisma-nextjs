'use client';

import { User } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React, { FC, cache, use } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { deleteUser } from '../../../api';

const getUsers = cache(() =>
	fetch('http://localhost:3000/api/users').then(res => res.json())
);

export default function ListUsers() {
	const Router = useRouter();
	let users = use<User[]>(getUsers());

	const handleDeleteUser = async (id: string) => {
		await deleteUser(id);
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
