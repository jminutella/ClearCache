/*  
 * ClearCache - clear Chrome's cache with one-click
 * @author James Minutella
 * 11/04/2016
*/
var clearCache;

chrome.browserAction.onClicked.addListener(function (btn) {
	clearCache();
});

clearCache = function () {
	chrome.browsingData.remove({
	"since": 0 // since the beginning of time
	}, {
		"appcache": true,
		"cache": true,
		"cookies": false,
		"downloads": false,
		"fileSystems": true,
		"formData": true,
		"history": true,
		"indexedDB": true,
		"localStorage": true,
		"serverBoundCertificates": false,
		"pluginData": true,
		"passwords": false,
		"webSQL": true	
	}, null);
};