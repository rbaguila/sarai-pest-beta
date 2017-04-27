Template.SaraiPestsSpidMonitorChart.onRendered(function() {
	$('#SPidCMSTab').attr('style', 'background-color: #b3b3b3');
});

Template.SaraiPestsSpidMonitorChart.onDestroyed(function() {
	$('#SPidCMSTab').removeAttr('style');
});


Template.highchartsPCHelper.onRendered(function() {
    var self = this;

    self.autorun(function() {
        var data = Template.currentData();
        $('#' + data.chartId).highcharts(data.chartObject);
    });
})