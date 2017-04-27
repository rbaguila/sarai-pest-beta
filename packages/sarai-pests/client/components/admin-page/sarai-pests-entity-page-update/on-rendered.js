Template.EntityPageUpdate.onRendered(function() {
	$('#PestLibraryTab').attr('style', 'background-color: #b3b3b3');
	$("main").scrollTop(0);
  imageURL = PlantProblem.findOne({_id: FlowRouter.current().params._id}).image;
  Session.set("imageURL",imageURL);
  $('.jqDropZone').html("<img src='"+imageURL+"' width='100%' height='295px'/>");
});

Template.EntityPageUpdate.onDestroyed(function() {
	$('#PestLibraryTab').removeAttr('style');
});