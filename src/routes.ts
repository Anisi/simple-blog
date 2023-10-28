const routes = Object.freeze({
	home: '/',
	post: {
		list: '/post',
		edit: '/post/:id/modify',
		create: '/post/modify',
	},
	authentication: {
		register: '/authentication/register',
		login: '/authentication/login',
	},
});

export default routes;
