interface UserGet {
	firstName: string;
	lastName: string;
	age: number;
	phone_number: number;
}

interface UserGetPayload {
	user_id: string;
	phone_number?: number;
}

export {UserGet, UserGetPayload};
