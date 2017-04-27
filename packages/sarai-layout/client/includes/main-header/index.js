Template.MainHeader.helpers({
  topHeader: function(){
    //return Home.find({'title': 'Hello World'});
    return Main.find({'name': 'topHeader'}).fetch()[0];
  },
  links: function(){
    var obj = Main.findOne({'name': 'mainHeader'});
    if(typeof obj !== 'undefined'){
      return obj.links;
    }
  },
  mainH: function(){
    var obj = Main.findOne({'name' : 'mainHeader'});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },
  configureAccountType: function(){
    if (!Meteor.user().profile){
      Meteor.call('updateAccountRole', ["Registered"]);
    }
  }
});

LoggedIn = function(){
	if(Meteor.userId()===null){
		return false;
	}
	else{
		return true;
	}
}

Template._loginButtonsLoggedInDropdownActions.onRendered(function(){
    $("#login-buttons-open-change-password").before("<div class='login-button' id='login-buttons-manage-account'>Manage Account</div>");
    $("#login-buttons-manage-account").click(function(event) {
      FlowRouter.go("/pests-manage-account");
    });
});
