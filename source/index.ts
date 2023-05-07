import express from 'express';
import Connection from './App/connection';
import morgan from 'morgan';

const app = express();

// server configurations
app.use(morgan('dev'));
app.use(express.json());

// Route files
import UserRoutes from './Routes/user.Route';

// Router configuration
app.use('/user', UserRoutes);

Connection._expressIgniter(app);
