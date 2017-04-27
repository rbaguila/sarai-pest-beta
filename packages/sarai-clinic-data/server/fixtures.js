if (CMS.find().count() === 0) {

	CMS.insert({
		info: 'finalSpid',
		bannerContentPosition: 'middle',
		bannerImage: '',
		bannerImageID: '',
		bannerHeadText: 'Smarter Pest Identification',
		bannerSubText: 'An online platform that combines different strategies and practices for identification and management of pests',
		row1HeadText: 'PEST RISK MAP',
		row1Image1: '',
		row1Image2: '',
		row1Image1ID: '',
		row1Image2ID: '',
		row2HeadText: 'PEST CONTROL STEPS',			
		row3HeadText: 'RESEARCH A PEST',
		row3SubText: 'Know about PESTS in your crops. Visit our Pest Library for more detailed information and management information.'
	});
	
	CMS.insert({
		info: 'finalClinic',
		bannerContentPosition: 'middle',
		bannerImage: '',
		bannerImageID: '',
		bannerHeadText: 'Pest Clinic',
		bannerSubText: 'Ask for experts assistance on rice and corn pests',
		rowIHeadText: 'Concerned in Increase Protection and Pest Management Services to its Clients',
		rowIImage: '',
		rowIIHeadText: 'Serving since 70s',
		rowIISubText: 'Started in the late 70s, the Plant Pest Clinic is an extension program of the Crop Protection Cluster which offers pest management services such as accurate diagnostic and control recommendation to farmers. Through it, experts share their knowledge on pest identification and management, consultations, and offers other related services such as fungal, bacterial, and nematode analyses.',
		rowIIImage: '',
		problem: 'Pest,Disease,Others',
		rowIID: '',
		rowIIID: ''
	});
	
	CMS.insert({
		info: 'finalLib',
		bannerContentPosition: 'middle',
		bannerImage: '',
		bannerImageID: '',
		bannerHeadText: 'Pest Library',
		bannerSubText: 'An online library for Rice and Corn Pests',
		searchLabelText: 'Search the library for pests',
		viewPestType: ['Rice', 'Corn'],
		pestsPerPage: 8
	});

	CMS.insert({
		info: 'finalId',
		bannerContentPosition: 'middle',
		bannerImage: '',
		bannerImageID: '',
		bannerHeadText: 'Pest Identification',
		bannerSubText: 'Identify pest by uploading a pest picture below by selecting the image processing tab or by answering questions from the ontology-based tab',
		pestHeadText: 'PESTS'
	});

	CMS.insert({
		info: 'finalMonitor',
		bannerContentPosition: 'middle',
		bannerImage: '',
		bannerImageID: '',
		bannerHeadText: 'Pest Monitor',
		bannerSubText: 'Charts and maps for pest-related activities'
	});
}
