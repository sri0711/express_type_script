/* eslint-disable security/detect-object-injection */
import mongoose, {Mongoose} from 'mongoose';

export const create = (): Mongoose => {
	const mongeese: any = new mongoose.Mongoose();

	for (const [key, value] of Object.entries(mongoose)) {
		if (!(mongeese[key] !== null) && Object.prototype.hasOwnProperty.call(mongoose, key)) {
			mongeese[key] = value;
		}
	}

	return mongeese;
};
