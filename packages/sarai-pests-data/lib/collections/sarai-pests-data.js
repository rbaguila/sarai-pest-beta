PlantProblem = new Mongo.Collection('plantProblem')

PlantProblem.initEasySearch(['eng_name','fil_name','sci_name','symptoms'], {
    'limit' : 20,
    'use' : 'mongo-db'
});

// PlantProblem = new EasySearch.Index({
//   collection: PlantProblem,
//   fields: ['eng_name','fil_name','sci_name','symptoms'],
//   engine: new EasySearch.Minimongo()
// });

PlantProblem.deny({
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