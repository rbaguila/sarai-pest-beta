Template.Footer.helpers({
  footer: function(){
    //return Home.find({'title': 'Hello World'});
    return Main.findOne({'name': 'footer'});
  },
  contactinfo: function(){
  	return Main.findOne({'name': 'contact-us'});
  },
  sharelinks: function(){
  	var obj = Main.findOne({'name': 'footer'});
    if(typeof obj !== 'undefined'){
      return obj.share;
    }
  }
});