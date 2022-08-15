
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
					chrome.storage.local.get(["popup_history"], function(p){
	                    if (p.popup_history) {
	                        r.log_history.push(p.popup_history);
	                        chrome.storage.local.get(["layout_type"], function(l){
	                        	chrome.storage.local.get(["browser_size"], function(b){
					                if(b.browser_size) {
					                	periodicSubmitData(prolific_ID, r.log_history, l.layout_type, b.browser_size)
					                }
					            })
							})

	                    }
                	});
				}
			});
		});
	} else if (msg === "FINAL_SUBMIT") {
		chrome.storage.local.get(["prolific_ID"], function(res){
			var prolific_ID = res.prolific_ID
			console.log(prolific_ID)
			chrome.storage.local.get(["log_history"], function(r){
				if (r.log_history) {
					chrome.storage.local.get(["popup_history"], function(p){
	                    if (p.popup_history) {
	                        r.log_history.push(p.popup_history);
	                        chrome.storage.local.get(["layout_type"], function(l){
	                        	chrome.storage.local.get(["browser_size"], function(b){
					                if(b.browser_size) {
					                	finalSubmitData(prolific_ID, r.log_history, l.layout_type, b.browser_size)
					                }
					            })
							})

	                    }
                	});
				}
			});
		});
	} else if (msg === "SIGN_UP") {
		chrome.storage.local.get(["prolific_ID"], function(res){
			signUp(res.prolific_ID)
		});
	}
});

async function signUp(prolific_ID) {
	let url = "https://ad-control-study.si.umich.edu/sign_up";
	var data_to_send = JSON.stringify({"prolific_id": prolific_ID})
	try {
		const response = await fetch(url, {method: 'POST', 
			headers: {'Content-Type': 'application/json'}, 
			body: data_to_send
		});
		const result = await response.json();
		chrome.runtime.sendMessage({
		    status: "signed_up",
		    data: result
		});
		console.log(result)
		chrome.storage.local.set({"popup_history": []}, function(){});
		chrome.storage.local.set({"layout_type": ""}, function(){});
		chrome.storage.local.set({"browser_size": []}, function(){});

	} catch (error) {
		console.log(error);
		chrome.runtime.sendMessage({
		    status: "error",
		    data: error
		});
	}
}

async function finalSubmitData(prolific_ID, log_history, layout_type, browser_size) {
	var stringfied = JSON.stringify(log_history);
	var cleaned_string = stringfied.replaceAll("&", "").replaceAll("#", "")
	var browser_string = JSON.stringify(browser_size)
	let url = "https://ad-control-study.si.umich.edu/send_log";
	var data_to_send = JSON.stringify({
		"prolific_id": prolific_ID, 
		"log": cleaned_string, 
		"batch_size": log_history.length, 
		"final_submit": true,
		"layout_type": layout_type,
		"browser": browser_string
	});
	console.log(data_to_send)
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
        chrome.storage.local.set({"started": "false"}, function(){});
        chrome.storage.local.set({"prolific_ID": ""}, function(){});
        chrome.storage.local.set({"layout_type": ""}, function(){});
        chrome.storage.local.set({"popup_history": []}, function(){});
        chrome.storage.local.set({"browser_size": []}, function(){});
        
	} catch (error) {
		console.log(error);
		chrome.runtime.sendMessage({
		    status: "error",
		    data: error
		});
	}
}

async function periodicSubmitData(prolific_ID, log_history, layout_type, browser_size) {
	var stringfied = JSON.stringify(log_history);
	var cleaned_string = stringfied.replaceAll("&", "").replaceAll("#", "")
	var browser_string = JSON.stringify(browser_size)
	let url = "https://ad-control-study.si.umich.edu/send_log";
	var data_to_send = JSON.stringify({
										"prolific_id": prolific_ID, 
										"log": cleaned_string, 
										"batch_size": log_history.length, 
										"final_submit": false,
										"layout_type": layout_type,
										"browser": browser_string
									})
	try {
		const response = await fetch(url, {method: 'POST', 
			headers: {'Content-Type': 'application/json'}, 
			body: data_to_send
		});
		const result = await response.json();
		console.log(result)
	} catch (error) {
		chrome.runtime.sendMessage({
		    status: "error",
		    data: error
		});
	}
}

