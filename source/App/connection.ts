import Config from './config';
import {create} from '../Helpers/mongoConnection';
const userDatabase = create();
import {ConnectOptions} from 'mongoose';

interface Connection {
	_userDB: () => any;
	_expressIgniter: (app: any) => void;
}

const Connection: Connection = {
	_userDB: () => {
		userDatabase.connect(Config.DB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true
		} as ConnectOptions);
		return userDatabase;
	},
	_expressIgniter: (app: any) => {
		let userDatabaseCheck = false;

		userDatabase.connection.on('connected', () => {
			userDatabaseCheck = true;
			app.emit('start');
		});

		app.on('start', () => {
			if (userDatabaseCheck) {
				app.listen(Config.PORT, () => {
					console.log('server listening on port ' + Config.PORT);
				});
			}
		});
	}
};

export default Connection;
