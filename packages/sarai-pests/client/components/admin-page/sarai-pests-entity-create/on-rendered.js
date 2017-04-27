Template.EntityCreate.onRendered(function() {
	$('#PestLibraryTab').attr('style', 'background-color: #b3b3b3');
	$("main").scrollTop(0);
  Session.set("imageURL",imageURL);
  $('.jqDropZone').html("<img src='/images/drop-here.png' width='100%' height='295px'/>");
});

Template.EntityCreate.onDestroyed(function() {
	$('#PestLibraryTab').removeAttr('style');
});