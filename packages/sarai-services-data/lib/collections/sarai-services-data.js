Services = new Mongo.Collection('services')

// PlantProblem = new EasySearch.Index({
//   collection: PlantProblem,
//   fields: ['eng_name','fil_name','sci_name','symptoms'],
//   engine: new EasySearch.Minimongo()
// });

Services.deny({
	insert: function(){
		return true
	},
	update: function() {
		return true
	},
	remove: function() {
		return true
	}
})