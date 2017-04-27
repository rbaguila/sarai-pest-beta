if (UserRequest.find().count() === 0) {

	UserRequest.insert({
		category: 'Account Change',
		subject: 'Change account role to Pest Monitor Admin',
		message: 'I am willing to improve Pest Monitor Module.',
		date: 'July 8th 2016, 11:27:25 am',
		user: 'yQ873DeJakP6wtg9d'
	});

	UserRequest.insert({
		category: 'Account Change',
		subject: 'Delete account',
		message: 'I am no longer using the site.',
		date: 'July 13th 2016, 4:29:30 pm',
		user: 'yQ873DeJakP6wtg9d'
	});
}
