
  
chrome.runtime.onMessage.addListener(msg => {
    
    console.log("listen in background")
    console.log(msg);
    if (msg === "RELOAD") {
    	chrome.tabs.reload();
    }
     
});



