Template.SaraiPestsCreateReport.onRendered(function() {
	$('#PestClinicTab').attr('style', 'background-color: #b3b3b3');
});

Template.SaraiPestsCreateReport.onDestroyed(function() {
	$('#PestClinicTab').removeAttr('style');
});