import express from 'express';
import {
	createUser,
	getUsers,
	getUser,
	updateUser,
	deleteUser
} from './author.controller.js';

const router = express.Router();

//router.get('/author', getUsers);
router.post('/author', createUser);
//router.get('/author/:id', getUser);
//router.patch('/author/:id', updateUser);
//router.delete('/author/:id', deleteUser);

export default router;