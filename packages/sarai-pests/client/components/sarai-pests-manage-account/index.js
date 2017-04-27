Template.ManageAccount.helpers({
  userRole: function(){
    // retrieve account types
    return ["Pest Library Admin", "Pest Identification Admin", "Pest Monitor Admin", "Pest Clinic Admin", "Super Admin"];
  },
  isChecked: function(role){
    return Meteor.users.find({"profile.role": role}).count() > 0? true : false;
  }
})

Template.ManageAccount.events({
  'submit form' : function(e) {
    e.preventDefault();

    var selectedRoles = ["Registered"];
    $("input[type=checkbox]:checked").map(function() {
        selectedRoles.push($(this).val());
    });
    // should only update the UserRequest collection
    
    Meteor.call('updateAccountRole', selectedRoles);
    alert("Request for account role changes was successfully submitted to Administrator.");
    history.back();
  },
  'click #cancel': function(e){
    e.preventDefault();
    history.back();
  },
  'click #delete-account': function(e){
    e.preventDefault();
    if (confirm("Are you sure you want to delete your account?")){
      // should only update the UserRequest collection
      alert("Request for account deletion was successfully submitted to Administrator.");
      history.back();
    }
  }
});


