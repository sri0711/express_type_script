import Connection from '../App/connection';

const {_userDB} = Connection;

const UserSchema: any = _userDB().Schema({
	user_id: {type: String},
	first_name: {type: String},
	last_name: {type: String},
	age: {type: Number},
	phone_number: {type: String}
});

const UserModel: any = _userDB().model('users', UserSchema);

export default UserModel;
