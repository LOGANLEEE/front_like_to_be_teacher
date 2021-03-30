import { atom } from 'recoil';

export const theme_info_state = atom({
	key: 'theme_info_state',
	default: { is_dark: true, dark_back_ground: '#0e161f', white_back_ground: '#6b636a' },
});

export const user_info_state = atom({
	key: 'user_info',
	default: {
		user_id: '',
		user_name: '',
		login: false,
	},
});

export const test = atom({
	key: 'test',
	default: {
		login: false,
	},
});
