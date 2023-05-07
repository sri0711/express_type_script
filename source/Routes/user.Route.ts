import express from 'express';
import Responder from '../App/responder';
import UserController from '../controller/user.controller';

const Router = express.Router();

Router.post('/create', async (request, response) => {
	const result: object = await UserController.create(request);
	return Responder._responseHandler(response, result);
});

Router.get('/list', async (request, response) => {
	const result: object = await UserController.list();
	return Responder._responseHandler(response, result);
});

export default Router;
