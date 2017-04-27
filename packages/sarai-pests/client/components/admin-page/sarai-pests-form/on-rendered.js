Template.FormsSubmitted.onRendered(function() {
	$('#PestClinicTab').attr('style', 'background-color: #b3b3b3');
});

Template.FormsSubmitted.onDestroyed(function() {
	$('#PestClinicTab').removeAttr('style');
});