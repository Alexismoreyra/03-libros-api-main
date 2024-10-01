import prisma from './../../prisma/prismaClient.js';

export const createBook = async (book) => {
    const { title, year, publisher, authorId } = book;
    const book = await prisma.book.create({
		data: {
			title,
			year,
			publisher,
			authorId
        }
    });

    return book; 
};