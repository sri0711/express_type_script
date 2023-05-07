interface User {
	user_id?: string;
	firstName: string;
	lastName: string;
	age: number;
	phone_number: number;
}

interface UserGetPayload {
	user_id: string;
	phone_number?: number;
}

export {User, UserGetPayload};
