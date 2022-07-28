// try {
//     importScripts("src/browser-polyfill.min.js", "src/common.js", "src/util.js", "src/rules_sync.js", "src/background.js");
// } catch (e) {
//     console.log(e);
// }
async () => {
	let queryOptions = { active: true, lastFocusedWindow: true };
	let [tab] = await chrome.tabs.query(queryOptions);

	chrome.scripting.executeScript({
	   target: {tabId: tab.id, allFrames: true},
	   files: ['src/browser-polyfill.min.js', 'src/common.js', 'src/util.js', "src/rules_sync.js", "src/background.js"],
	});
}
