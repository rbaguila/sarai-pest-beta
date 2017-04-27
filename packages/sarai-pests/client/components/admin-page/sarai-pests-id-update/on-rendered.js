Template.SaraiPestsIdUpdatePage.onRendered(function() {
	$('#viewChanges').hide();
	$('#PestIdentificationTab').attr('style', 'background-color: #b3b3b3');
});

Template.SaraiPestsIdUpdatePage.onDestroyed(function() {
	$('#PestIdentificationTab').removeAttr('style');
});