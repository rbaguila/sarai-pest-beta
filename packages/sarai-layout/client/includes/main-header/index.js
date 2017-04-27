Template.MainHeader.helpers({
  topHeader: function(){
    //return Home.find({'title': 'Hello World'});
    return Main.find({'name': 'topHeader'}).fetch()[0];
  },
  mainLinks: function(){
    var obj = Main.findOne({'name': 'mainHeader'}, {sort: {rank: 1}});

    if (obj) {
      return sortByRank(obj.links)
    }
  },

  mainH: function(){
    var obj = Main.findOne({'name' : 'mainHeader'}, {sort: {rank: 1}});
    if(typeof obj !== 'undefined'){
      return obj;
    }
  },

  hasSubLinks: (mainLink) => {
    if (mainLink.links && mainLink.links.length > 0) {
      return true
    } else {
      return false
    }
  },

  sortByRank: (links) => {
    return sortByRank(links)
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

sortByRank = (items) => {
  const sorted = items.sort((a, b) => {
    return a.rank - b.rank
  })

  return sorted
}