import express from 'express';
import {
	createBookController,
	getBooks,
	getBook,
	updateBook,
	deleteBook
} from './book.controller.js';

const router = express.Router();

router.get('/book', getBooks);
router.post('/book', createBookController);
router.get('/book/:id', getBook);
router.patch('/book/:id', updateBook);
router.delete('/book/:id', deleteBook);

export default router;
