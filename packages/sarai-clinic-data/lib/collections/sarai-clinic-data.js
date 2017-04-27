CMS = new Mongo.Collection('cms')


CMS.deny({
	insert: function() {
		return true
	},
	update: function() {
		return true
	},
	remove: function() {
		return true
	}
})

