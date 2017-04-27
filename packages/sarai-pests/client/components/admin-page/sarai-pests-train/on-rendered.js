Template.TrainPest.onRendered(function() {
	$('#PestLibraryTab').attr('style', 'background-color: #b3b3b3');
	$('.jqDropZone').html("<img src='/images/drop-here.png' width='100%' height='295px'/>");
});

Template.TrainPest.onDestroyed(function() {
	$('#PestLibraryTab').removeAttr('style');
});