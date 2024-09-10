

import prisma from './../../prisma/prismaClient.js';

export const getUsers = async (req, res) => {
	try {
		const user = await prisma.book.findMany();

		res.json(user);
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener el usuario' });
	}
};

export const getAuthor = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const author = await prisma.author.findUniqueOrThrow({
			where: { id }
		});

		res.json(author);
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener el autor' });
	}
};

export const createUser = async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;

		const user = await prisma.user.create({
			data: {
				firstname,
                lastname,
                email,
                password
			}
		});

		res.status(201).json(user);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Error al crear usuario' });
	}
};

export const updateUser = async (req, res) => {
	const id = parseInt(req.params.id);
	const {firstname, lastname, password} = req.body;
	try {
		const userUpdate = await prisma.user.update({
			where: { id },
			data: {
				...(firstname && {firstname}),
				...(lastname && {lastname}),
				...(password && {password})
			}
		});
		if (!userUpdate) {
			throw new Error();
		}
		res.json(userUpdate);
	} catch (error) {
		res.status(500).json({ error: 'Error al actualizar usuario' });
	}
};

export const deleteUser = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const userDelete = await prisma.user.delete({ where:{id}});
		res.json(userDelete);
	} catch (error){
		res.status(500).json({error: 'Error al borrar el usuario'});
	}
};
