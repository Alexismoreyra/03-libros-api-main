import prisma from './../../prisma/prismaClient.js';

export const getAuthors = async (req, res) => {
	try {
		const authors = await prisma.book.findMany();

		res.json(authors);
	} catch (error) {
		res.status(500).json({ error: 'Error al obtener de autor' });
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

export const createAuthor = async (req, res) => {
	try {
		const { firstname, lastname, nationality, birthdate } = req.body;

		// const firstname = req.body.firstname;
		// const lastname = req.body.lastname;
		// const nationality = req.body.nationality;
		// const birthdate = req.body.birthdate;

		const author = await prisma.author.create({
			data: {
				firstname,
                lastname,
                nationality,
                birthdate: new Date(birthdate) //cambio
			}
		});

		res.status(201).json(author);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Error al crear autor' });
	}
};

export const updateAuthor = async (req, res) => {
	const id = parseInt(req.params.id);
	const { firstname, lastname, nationality, birthdate } = req.body;
	try {
		const authorUpdate = await prisma.author.update({
			where: { id },
			data: {
				...(firstname && { firstname }),
				...(lastname && { lastname }),
				...(nationality && { nationality }),
				...(birthdate && { birthdate: new Date(birthdate) })
			}
		});
		if (!authorUpdate) {
			throw new Error();
		}
		res.json(authorUpdate);
	} catch (error) {
		res.status(500).json({ error: 'Error al actulizar autor' });
	}
};

export const deleteAuthor = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const authorDelete = await prisma.author.delete({ where: { id } });
		res.json({ msg: 'Autor borrado correctamente!' });
	} catch (error) {
		res.status(500).json({ error: 'Error al borrar el autor' });
	}
};

