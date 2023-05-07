import {User} from '../Interfaces/user.Interface';
import UserModel from '../model/user.model';
import Utils from '../Helpers/utils';

// import {Pick} from '../Helpers/common';

const UserController = {
	create: async (request: any) => {
		try {
			const postData: User = request?.body;
			postData.user_id = Utils._getRandom();
			const userExists: object = await UserModel.findOne({phone_number: postData?.phone_number}).lean();
			if (userExists) {
				return {
					error: {message: 'User already exists', status: 404}
				};
			}
			const user: any = await new UserModel(postData);
			await user.save();

			return {
				message: {message: 'User created successfully', status: 201}
			};
		} catch (error) {
			return {
				error: error
			};
		}
	},
	list: async () => {
		try {
			const user: object = await UserModel.find().lean();
			return {
				message: {message: 'User list data'},
				data: user as User[]
			};
		} catch (error) {
			return {
				error: error
			};
		}
	}
};

export default UserController;
