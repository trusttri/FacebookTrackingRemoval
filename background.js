
console.log("listen in background")
chrome.runtime.onMessage.addListener(msg => {
	console.log(msg)
	if (msg === "RELOAD") {
		chrome.tabs.reload();
	} else if (msg === "SUBMIT") {
		chrome.storage.local.get(["prolific_ID"], function(res){
		var prolific_ID = res.prolific_ID
		console.log(prolific_ID)
		chrome.storage.local.get(["log_history"], function(r){
			if (r.log_history) {
				submitData(prolific_ID, r.log_history)
			}
		});
	});
	}
});


async function submitData(prolific_ID, log_history) {
	var stringfied = JSON.stringify(log_history);
	var cleaned_string = stringfied.replaceAll("&", "").replaceAll("#", "")

	let url = "https://ad-control-study.si.umich.edu/send_log";
	var data_to_send = JSON.stringify({"prolific_id": prolific_ID, "log": cleaned_string})
	try {
		const response = await fetch(url, {method: 'POST', 
			headers: {'Content-Type': 'application/json'}, 
			body: data_to_send
		});
		const result = await response.json();
		console.log(result)
		chrome.runtime.sendMessage({
		    status: "submitted",
		    data: result
		});
	} catch (error) {
		console.log(error.toString());
	}
	
					

}