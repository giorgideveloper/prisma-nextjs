import { Ipost } from '@/types/post';

const baseUrl = 'http://localhost:3000/api';

export const getUsers = async (): Promise<Ipost> => {
	const res = await fetch(`${baseUrl}/users`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	});
	const newTodo = await res.json();
	return newTodo;
};

export const addPost = async (todo: Ipost): Promise<Ipost> => {
	const res = await fetch(`${baseUrl}/users`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(todo),
	});
	const newTodo = await res.json();
	return newTodo;
};

export const editUser = async (todo: Ipost): Promise<Ipost> => {
	const res = await fetch(`${baseUrl}/users`, {
		method: 'PUT',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(todo),
	});
	const newTodo = await res.json();
	return newTodo;
};

export const deleteUser = async (id: string): Promise<void> => {
	const res = await fetch(`${baseUrl}/users/${id}`, {
		method: 'DELETE',
	});
};

export const addPostCart = async (data: Ipost): Promise<Ipost> => {
	const res = await fetch(`${baseUrl}/cart`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data),
	});
	const newTodo = await res.json();
	return newTodo;
};
