Template.TopHeader.helpers({
  topHeader: function(){
    //return Home.find({'title': 'Hello World'});
    return Main.find({'name': 'topHeader'}).fetch()[0];
  }
})