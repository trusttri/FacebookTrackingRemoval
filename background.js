
console.log("listen in background")
chrome.runtime.onMessage.addListener(msg => {
	console.log(msg)
	if (msg === "RELOAD") {
		chrome.tabs.reload();
	} else if (msg === "PERIODIC_SUBMIT") {
		chrome.storage.local.get(["prolific_ID"], function(res){
			var prolific_ID = res.prolific_ID
			console.log(prolific_ID)
			chrome.storage.local.get(["log_history"], function(r){
				if (r.log_history) {
					periodicSubmitData(prolific_ID, r.log_history)
				}
			});
		});
	} else if (msg === "FINAL_SUBMIT") {
		chrome.storage.local.get(["prolific_ID"], function(res){
			var prolific_ID = res.prolific_ID
			console.log(prolific_ID)
			chrome.storage.local.get(["log_history"], function(r){
				if (r.log_history) {
					finalSubmitData(prolific_ID, r.log_history)
				}
			});
		});
	}
});


async function finalSubmitData(prolific_ID, log_history) {
	var stringfied = JSON.stringify(log_history);
	var cleaned_string = stringfied.replaceAll("&", "").replaceAll("#", "")

	let url = "https://ad-control-study.si.umich.edu/send_log";
	var data_to_send = JSON.stringify({"prolific_id": prolific_ID, "log": cleaned_string, "batch_size": log_history.length})
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

		//need to clear
		chrome.storage.local.set({"log_history": []}, function(){});
		chrome.storage.local.set({"submitted": "false"}, function(){});
        chrome.storage.local.set({"started": "false"}, function(){});
        chrome.storage.local.set({"prolific_ID": ""}, function(){});
	} catch (error) {
		console.log(error.toString());
	}
}

async function periodicSubmitData(prolific_ID, log_history) {
	var stringfied = JSON.stringify(log_history);
	var cleaned_string = stringfied.replaceAll("&", "").replaceAll("#", "")

	let url = "https://ad-control-study.si.umich.edu/send_log";
	var data_to_send = JSON.stringify({"prolific_id": prolific_ID, "log": cleaned_string, "batch_size": log_history.length})
	try {
		const response = await fetch(url, {method: 'POST', 
			headers: {'Content-Type': 'application/json'}, 
			body: data_to_send
		});
		const result = await response.json();
		console.log(result)
	} catch (error) {
		console.log(error.toString());
	}
}


