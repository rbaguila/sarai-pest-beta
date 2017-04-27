Template.SaraiPestsLibUpdatePage.onRendered(function() {
	$('#viewChanges').hide();
	$('#PestLibraryTab').attr('style', 'background-color: #b3b3b3');
});

Template.SaraiPestsLibUpdatePage.onDestroyed(function() {
	$('#PestLibraryTab').removeAttr('style');
});