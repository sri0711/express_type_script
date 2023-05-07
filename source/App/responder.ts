interface Message {
	message: string;
	status: number;
}

interface Error {
	message: string;
	status: number;
}

interface Output {
	status: boolean;
	message: string;
	data?: object;
}
interface Result {
	error?: Error;
	message?: Message;
	data?: object;
}

interface Responder {
	_responseHandler: (response: any, result: Result) => void;
	_failureHandler: (response: any, error: Error) => void;
	_successHandler: (response: any, message: Message, data?: object) => void;
}

const Responder: Responder = {
	_responseHandler: (response: any, result: Result): void => {
		const {error, message, data}: Result = result;
		if (error) {
			return Responder._failureHandler(response, error);
		}
		return Responder._successHandler(response, message, data);
	},
	_failureHandler: (response: any, error: Error): void => {
		const output: Output = {
			status: false,
			message: error?.message
		};
		return response.status(error.status || 400).send(output);
	},
	_successHandler: (response: any, message: Message, data?: object): void => {
		const output: Output = {
			status: true,
			message: message?.message,
			data: data || undefined
		};
		return response.status(message.status || 200).send(output);
	}
};

export default Responder;
