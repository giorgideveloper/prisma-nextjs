'use client';

import { useRouter } from 'next/navigation';
import React, { FC, cache, use } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { deleteUser } from '../../../api';

export default function DeleteUser({ id }) {
	const Router = useRouter();

	const handleDeleteUser = async (id: string) => {
		await deleteUser(id);

		Router.refresh();
	};

	return (
		<>
			<button
				className='group flex h-5 text-center w-5 overflow-hidden  bg-red-500 text-lg font-bold text-white'
				onClick={() => handleDeleteUser(id)}
			>
				<AiFillDelete />
			</button>
		</>
	);
}
