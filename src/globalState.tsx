import { atom, selector } from 'recoil';

export const theme_info_state = atom({
	key: 'theme_info_state',
	default: { is_dark: true, dark_back_ground: '#0e161f', white_back_ground: '#6b636a' },
});

export const user_info_state = atom({
	key: 'user_info',
	default: {
		email: '',
		first_name: '',
		id: '',
		is_login: false,
		last_name: '',
		level: 5,
		locked: false,
		mobile: '',
		register_date: '',
		picture: {
			height: 0,
			is_silhouette: false,
			url: '',
			width: 0,
		},
	},
});

export const alert_state = atom({
	key: 'test',
	default: {
		message: '',
		severity: 'error',
		visible: false,
	},
});

export const menu_state = atom({
	key: 'manu',
	default: {
		selected: 'main',
	},
});

export const menus = ['Academy', 'Q&A', 'News', 'Community'];
// {
// 	accessToken: 'EAADj9UX0GuoBAPpENlyCSWs6nS3fhkhrDD3BlZApZAY5y5aVy38bHbCKkqTCvGMc3TtYG2JYeNLdG1AHWypTc7jqwhRjRUsjP7RoGoMOT1q7aBRgeX0px9oZCEHGvRdPDcfogpsvXMpvncIei0te1rIsRp4t213aKeSjBXYoLxUVwZA1TzNC6pGLcZBucUQe0ZANfRyF7HywZDZD';
// 	data_access_expiration_time: 1625241683;
// 	email: 'logan_lee@kakao.com';
// 	expiresIn: 7117;
// 	graphDomain: 'facebook';
// 	id: '1611461159045658';
// 	name: 'Logan Lee';
// 	picture: data: height: 50;
// 	is_silhouette: false;
// 	url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1611461159045658&height=50&width=50&ext=1620057684&hash=AeTGWfR-gL7FPXmbZZo';
// 	width: 50;
// 	__proto__: Object;
// 	__proto__: Object;
// 	signedRequest: 'sL6jhauInQAwqdEaJ6k-DICcYJAt0nyzibuAJCz6CB0.eyJ1c2VyX2lkIjoiMTYxMTQ2MTE1OTA0NTY1OCIsImNvZGUiOiJBUURiWE9sU3p5UlJwbk9kRjlES2xGWnREM0ZBWmFtdjl2blNNWWN1aVMtcG5idHBVTGs4WUxoTV9adXE2dkFHelRVb0gzelhfTW5wSngxOVB2d01CeGs1aEphUElsbXJwWlk5WURnZ0wwaENTOGpnMTdqMkxyVWdmaWJYOFdmV1R6VFNtRW02QW9EcGJOWUw2emc1QlJXakoxNjdnend6M19jZXRYbzR6dVhxWlA3bzNUVm9oVVVjaWo5MWhKTDJKNUFSN1NlRDNuM3FRZjlOQUE5LXhUa3ptZ3NmLWZfWXY0UGk4aUNwMVg4Qm5iS2Ixd2tHcGlNVUMwWk1SV3NHRWtjT0JhdFM5TGx1UnhRSWQtZTd0NzZWWGRXMGRkSGgwZjMwZVFlUV9kWmpJZ0t4dUVKcXVVeEpVNncxV3ZzTmttNm5INXdwYlY0QVVPYzVPcWNuT2pUSiIsImFsZ29yaXRobSI6IkhNQUMtU0hBMjU2IiwiaXNzdWVkX2F0IjoxNjE3NDY1NjgzfQ';
// 	userID: '1611461159045658';
// }
