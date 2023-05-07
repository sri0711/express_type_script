import shortid from 'shortid';

interface Utils {
	_getRandom: () => string;
}

const Utils = {
	_getRandom: (): string => {
		return shortid.generate();
	}
};

export default Utils;
