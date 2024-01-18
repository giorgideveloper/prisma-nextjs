import Image from 'next/image';
import React from 'react';
import Table from 'react-bootstrap/Table';
import { AiFillDelete } from 'react-icons/ai';
import { BiSolidEdit } from 'react-icons/bi';
import { deleteUser } from '../../../api';
import Mymodal from './modal.component';

export default function Tables({ users, setUsers }: any) {
	const handleDeleteUser = async (id: string) => {
		await deleteUser(id);
		// Refresh users after deletion
		fetch('http://localhost:3000/api/users')
			.then(res => res.json())
			.then(setUsers);
	};
	const name = <BiSolidEdit />;
	return (
		<>
			<Table responsive='sm'>
				<thead>
					<tr>
						<th>#</th>
						<th>Name</th>
						<th>Role</th>
						<th>Email</th>
						<th>Table heading</th>
					</tr>
				</thead>
				<tbody>
					{users.map(
						(user: {
							id: string;
							name:
								| string
								| number
								| boolean
								| React.ReactElement<
										any,
										string | React.JSXElementConstructor<any>
								  >
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| React.PromiseLikeOfReactNode
								| null
								| undefined;
							role:
								| string
								| number
								| boolean
								| React.ReactElement<
										any,
										string | React.JSXElementConstructor<any>
								  >
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| React.PromiseLikeOfReactNode
								| null
								| undefined;
							email:
								| string
								| number
								| boolean
								| React.ReactElement<
										any,
										string | React.JSXElementConstructor<any>
								  >
								| Iterable<React.ReactNode>
								| React.ReactPortal
								| React.PromiseLikeOfReactNode
								| null
								| undefined;
						}): any => (
							// eslint-disable-next-line react/jsx-key
							<tr key={user.id}>
								<td>
									<Image
										src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
										style={{ height: 30, width: 30 }}
										width={30}
										height={30}
										alt={''}
									/>
								</td>
								<td>{user.name}</td>
								<td>{user.role}</td>
								<td>{user.email}</td>

								<td className='flex'>
									<button type='button' className='btn btn-danger'>
										<Mymodal />
									</button>
									<button
										onClick={() => handleDeleteUser(user.id)}
										type='button'
										className='btn btn-danger'
									>
										{' '}
										<AiFillDelete />
									</button>
								</td>
							</tr>
						)
					)}
				</tbody>
			</Table>
		</>
	);
}
