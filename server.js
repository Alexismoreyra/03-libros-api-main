import express from 'express';
import booksRoutes from './src/book/book.routes.js';
import authorsRoutes from './src/author/author.routes.js'
import userRoutes from './src/user/user.routes.js'
import authRoutes from './src/user/auth.routes.js'

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
	res.status(200).json('OK');
});

app.use('/api', booksRoutes);
app.use('/api', authorsRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.listen(port, () => {
	console.log(`Server funcionando`);
});

/*app.listen(port, () => {
	console.log(`Server funcionando en http://localhost:${port}`);
});
*/
