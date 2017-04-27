if (PestReport.find().count() === 0) {
	
	PestReport.insert({
		date: 'July 8th 2016, 11:27:25 am',
		title: "Sample Pest Report",
		description: "First ever pest report!",
		location: "Laguna, Philippines",
		imageURL: "",
		user: "yQ873DeJakP6wtg9d"
	});
}