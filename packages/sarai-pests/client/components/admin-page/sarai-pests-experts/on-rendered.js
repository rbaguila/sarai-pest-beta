Template.ExpertPage.onRendered(function() {
	$('#PestClinicTab').attr('style', 'background-color: #b3b3b3');
});

Template.ExpertPage.onDestroyed(function() {
	$('#PestClinicTab').removeAttr('style');
});