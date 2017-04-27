if (Privilege.find().count() === 0) {

	Privilege.insert({
		name: 'Update SPId',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'Add Module',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'Delete Module',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'Update Pest Library',
		authorized: [
			'Super Admin',
			'Pest Library Admin'
		]
	});

	Privilege.insert({
		name: 'Update Pest Identification',
		authorized: [
			'Super Admin',
			'Pest Identification Admin'
		]
	});

	Privilege.insert({
		name: 'Update Pest Monitor',
		authorized: [
			'Super Admin',
			'Pest Monitor Admin'
		]
	});

	Privilege.insert({
		name: 'Update Pest Clinic',
		authorized: [
			'Super Admin',
			'Pest Clinic Admin'
		]
	});

	Privilege.insert({
		name: 'Ask Services',
		authorized: [
			'Super Admin',
			'Pest Library Admin', 
			'Pest Identification Admin', 
			'Pest Monitor Admin', 
			'Pest Clinic Admin',
			'Registered'
		]
	});

	Privilege.insert({
		name: 'Provide Services',
		authorized: [
			'Super Admin',
			'Pest Library Admin', 
			'Pest Identification Admin', 
			'Pest Monitor Admin', 
			'Pest Clinic Admin'
		]
	});

	Privilege.insert({
		name: 'Report Site Problems',
		authorized: [
			'Super Admin',
			'Pest Library Admin', 
			'Pest Identification Admin', 
			'Pest Monitor Admin', 
			'Pest Clinic Admin',
			'Registered'
		]
	});

	Privilege.insert({
		name: 'Add Module Admin',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'View Module Admins',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'Update Module Admin',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'Delete Module Admin',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'View Users',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'Delete User',
		authorized: [
			'Super Admin'
		]
	});

	Privilege.insert({
		name: 'Add User Role',
		authorized: [
			'Super Admin'
		]
	});

}
