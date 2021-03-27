import { atom, selector } from 'recoil';

export const isDarkTheme = atom({
	key: 'isDarkTheme',
	default: false,
});
