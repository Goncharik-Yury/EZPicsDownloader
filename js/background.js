chrome.runtime.onMessage.addListener(
	function (arg, sender, sendResponse) {
		// var args = arg.collection;
		// for (i in args) {
		// 	var img_url = args[i];
		// 	try {
		// 		saveas = img_url.replace(/[^a-zA-Z0-9]/g, '-');
		// 	} catch (problem) {}

			chrome.downloads.download({
				url: arg
			});
		// }
	});

function sendResponse() {}