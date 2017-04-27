Template.SaraiPestsSpidUpdatePage.onRendered(function() {
	$('#viewChanges').hide();
	$('#SPidCMSTab').attr('style', 'background-color: #b3b3b3');
});

Template.SaraiPestsSpidUpdatePage.onDestroyed(function() {
	$('#SPidCMSTab').removeAttr('style');
});
