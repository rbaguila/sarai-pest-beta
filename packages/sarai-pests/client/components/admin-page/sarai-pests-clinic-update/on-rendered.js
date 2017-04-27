Template.SaraiPestsUpdatePage.onRendered(function() {
	$('#viewChanges').hide();
	$('#PestClinicTab').attr('style', 'background-color: #b3b3b3');
});

Template.SaraiPestsUpdatePage.onDestroyed(function() {
	$('#PestClinicTab').removeAttr('style');
});