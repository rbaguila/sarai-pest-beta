if (Assistance.find().count() === 0) {
	
	Assistance.insert({
		type: 'message',
		email: 'agamboa@gmail.com',
		subject: 'Pests seen',
		message: 'This is sample message number one.',
		user: 'Alexis Gamboa',
		date: 'April 16th 2016, 6:27:25 pm',
		month: 'April',
		year: '2016',
		problem: 'Unknown',
		control: '1'
	});
	
	Assistance.insert({
		type: 'message',
		email: 'rdim@gmail.com',
		subject: 'Bugs alert',
		message: 'This is sample message number two.',
		user: 'Ren Dimasalang',
		date: 'April 16th 2016, 6:37:25 pm',
		month: 'April',
		year: '2016',
		problem: 'Black Bug',
		control: '2'
	});
	
	Assistance.insert({
		type: 'message',
		email: 'hsantos@gmail.com',
		subject: 'Need Expert',
		message: 'This is sample message number three. If this works then yehey!',
		user: 'Harvey Santos',
		date: 'April 16th 2016, 6:47:25 pm',
		month: 'April',
		year: '2016',
		problem: 'Black Bug',
		control: '3'
	});
	
	Assistance.insert({
		type: 'message',
		email: 'gfernandez@gmail.com',
		subject: 'Rice bugs',
		message: 'Thus is sample message number four. Dont know what to do.',
		user: 'Gail Fernandez',
		date: 'April 16th 2016, 6:49:25 pm',
		month: 'April',
		year: '2016',
		problem: 'Black Bug',
		control: '4'
	});
	
	Assistance.insert({
		type: 'message',
		email: 'psilva@gmail.com',
		subject: 'Corn bugs',
		message: 'This is sample message number five. ',
		user: 'Penny Silva',
		date: 'April 16th 2016, 6:53:25 pm',
		month: 'April',
		year: '2016',
		problem: 'Unknown',
		control: '5'
	});
	
	
}
