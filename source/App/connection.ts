import Config from './config';

interface Connection {
	_expressIgniter: (app: any) => void;
}

const Connection: Connection = {
	_expressIgniter: (app: any) => {
		app.listen(Config.PORT, () => {
			console.log('server listening on port ' + Config.PORT);
		});
	}
};

export default Connection;
