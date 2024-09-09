export const createUser = async (req, res) => {
	try {
		const { firstname, lastname, email, password } = req.body;

		const author = await prisma.author.create({
			data: {
				firstname,
                lastname,
                email,
                password
			}
		});

		res.status(201).json(author);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Error al crear usuario' });
	}
};

