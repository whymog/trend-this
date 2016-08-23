chrome.webNavigation.onCompleted.addListener(function() {
	chrome.tabs.insertCSS({'file': 'hide.css'})
}, {url: [{hostSuffix: 'facebook.com'}]});