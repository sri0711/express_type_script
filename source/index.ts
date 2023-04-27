import express from 'express';
import Connection from './App/connection';
import morgan from 'morgan';

const app = express();

// server configurations
app.use(morgan('dev'));
app.use(express.json());

Connection._expressIgniter(app);
