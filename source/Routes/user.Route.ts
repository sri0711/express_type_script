import express from 'express';
import Responder from '../App/responder';

const Router = express.Router();

Router.get('/', (request, response) => {
	return Responder._responseHandler(response, {
		error: {message: 'test', status: 404}
	});
});

export default Router;
