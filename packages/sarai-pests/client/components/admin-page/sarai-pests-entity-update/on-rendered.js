Template.PestPage.onRendered(function() {
	$('#PestLibraryTab').attr('style', 'background-color: #b3b3b3');
});

Template.PestPage.onDestroyed(function() {
	$('#PestLibraryTab').removeAttr('style');
});

Template.PestTabs.onRendered(function(){
	$(document).foundation('reflow');
});