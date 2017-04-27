Template.RequestAssistance.onRendered(function() {
	$('#PestClinicTab').attr('style', 'background-color: #b3b3b3');
});

Template.RequestAssistance.onDestroyed(function() {
	$('#PestClinicTab').removeAttr('style');
});