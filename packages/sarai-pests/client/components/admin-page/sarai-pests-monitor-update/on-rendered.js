Template.SaraiPestsMonitorUpdatePage.onRendered(function() {
	$('#viewChanges').hide();
	$('#PestMonitorTab').attr('style', 'background-color: #b3b3b3');
});

Template.SaraiPestsMonitorUpdatePage.onDestroyed(function() {
	$('#PestMonitorTab').removeAttr('style');
});