/*  This file is part of FacebookTrackingRemoval.
    FacebookTrackingRemoval is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.
    FacebookTrackingRemoval is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.
    You should have received a copy of the GNU General Public License
    along with FacebookTrackingRemoval.  If not, see <http://www.gnu.org/licenses/>.
    Copyright (C) 2016-2021 Michael Ziminsky
*/

'use strict';

document.documentElement.innerHTML = document.documentElement.innerHTML.replace(/__MSG_(\w+)__/g, (_, key) => browser.i18n.getMessage(key));

app.init().then(() => {
    // Expert Options
    // const modStyle = document.getElementById("modStyle");
    // const preview = document.getElementById("preview");

    // Set version text
    // document.title += ` - v${browser.runtime.getManifest().version}`;

    chrome.storage.local.get(["submitted"], function(result){
        if (result.submitted=="true") {
            document.getElementById("submit").disabled=true;
            document.getElementById("sessionID").disabled=true;
            chrome.storage.local.get(["prolific_ID"], function(result){
                if (result.prolific_ID) {
                    document.getElementById("sessionID").value = result.prolific_ID
                }
            });

        }
    });


    document.getElementById("sessionID").addEventListener("keyup", function(){
        chrome.storage.local.set({"prolific_ID" : document.getElementById("sessionID").value}, function(){});
    })

    
    chrome.storage.local.get(["started"], function(result){
        if (result.started == "true") {
            document.getElementById("result").innerHTML = "Please read the survey instructions and complete the tasks.";
            document.getElementById("result").style.backgroundColor = "";
            document.getElementById("result").style.color = "black";
            document.getElementById("submit").disabled=true;
            chrome.storage.local.get(["prolific_ID"], function(result){
                if (result.prolific_ID) {
                    document.getElementById("sessionID").value = result.prolific_ID;
                }
            })
        }
    })
    

    document.getElementById("end").addEventListener("click", function(){

        // check if a session is started
        chrome.storage.local.get(["started"], function(result){
            console.log(result.started);

            if (result.started != "true") {
                document.getElementById("result").innerHTML = "Warning: Please start the session first.";
                document.getElementById("result").style.backgroundColor = "";
                document.getElementById("resultBox").className = "callout"
                document.getElementById("result").style.color = "white";
            } else {
                
                var prolific_ID = document.getElementById("sessionID").value;
                // check if prolific ID is empty
                if (prolific_ID.length == 0) {
                    document.getElementById("result").innerHTML = "Please first enter your Prolific ID and end the session.";
                    document.getElementById("result").style.backgroundColor = "";
                    document.getElementById("resultBox").className = "callout"
                    document.getElementById("result").style.color = "white";
                } else {

                    chrome.storage.local.set({"submitted": "true"}, function(){});
                    chrome.storage.local.set({"prolific_ID": prolific_ID}, function(){});

                    chrome.storage.local.get(["log_history"], function(r){
                    //for logging the last page visited on FB
                        if (r.log_history) {
                            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                                var activeTab = tabs[0];
                                r.log_history.push({'last_page:': activeTab.url}) 
                                chrome.storage.local.set({"log_history": r.log_history}, function(){console.log(r.log_history)});
                            });
            
                            var stringfied = JSON.stringify(r.log_history);
                            var cleaned_string = stringfied.replaceAll("&", "").replaceAll("#", "")
                            var id = document.getElementById("sessionID").value
                            var url = "https://ad-control-study.si.umich.edu/send_log?prolific_id=" +id + "&log=" + cleaned_string;
                            console.log(url)
            
                            var request = new XMLHttpRequest();
                            request.onreadystatechange = function(){
                                if (request.readyState == 4 && request.status == 200){
                                    console.log('returned: ' + request.responseText)
                                    var id = JSON.parse(request.responseText);
                                    console.log(id);
                                    document.getElementById("result").innerHTML = "Your session data has been safely submitted." + "<br>"
                                    document.getElementById("result").innerHTML +=  "Your session ID is: " + "<span style='background-color: #3573d3; color: white; padding: 1px 5px 1px 5px'>" + id["session_path_id"] + "</span>" +"<br>" + "<strong>" + "Please copy the session ID and enter it in the Qualtrics survey." + "</strong>"
                                    document.getElementById("resultBox").className = "default"
                                    document.getElementById("result").style.color = "black";
                                    document.getElementById("end").disabled=true;
                                }
                            };
                            request.open('GET', url);
                            request.send();
                        }

                    });
                }
           }
        });
        
    })

    document.getElementById("submit").addEventListener("click", function(){

        var prolific_ID = document.getElementById("sessionID").value;

        if (prolific_ID.length == 0) {
            document.getElementById("result").innerHTML = "Please type in your Proflic ID before starting";
            document.getElementById("result").style.backgroundColor = "";
            document.getElementById("resultBox").className = "callout"
            document.getElementById("result").style.color = "white";
        } else {
            //deliberately twice
            browser.runtime.sendMessage("RELOAD");
            browser.runtime.sendMessage("RELOAD");
            document.getElementById("submit").disabled=true;
            // document.getElementById("sessionID").disabled=true;
            // chrome.storage.local.set({"submitted": "true"}, function(){});
            // chrome.storage.local.set({"prolific_ID": document.getElementById("sessionID").value}, function(){});
            document.getElementById("result").textContent = "Please read the survey instructions and complete the tasks.";
            document.getElementById("result").style.color = "white";
            document.getElementById("resultBox").className = "callout"
            
            chrome.storage.local.set({"started" : "true"}, function(){});
        }
        
    })

    document.getElementById("reset").addEventListener("click", function(){
        chrome.storage.local.set({"log_history": []}, function(){console.log('reset')});
        document.getElementById("submit").disabled=false;
        document.getElementById("sessionID").disabled=false;
        // document.getElementById("sessionID").value = "";
        document.getElementById("end").disabled=false;
        document.getElementById("result").style.color = "white";
        document.getElementById("result").innerHTML = "<span style='padding: 1px 5px 1px 5px'> You cleared the previous session. <br> Please enter your Prolific ID and click <b>start session</b> to start a new one. </span>";
        document.getElementById("resultBox").className = "callout"
        chrome.storage.local.set({"submitted": "false"}, function(){});
        chrome.storage.local.set({"started": "false"}, function(){});
        chrome.storage.local.set({"prolific_ID": ""}, function(){});
    })



    // document.getElementById("legend").textContent += ` - v${browser.runtime.getManifest().version}`;

    // function handleCheckbox() { app.options[this.id] = this.checked; }
    // for (let checkbox of document.querySelectorAll("input[type=checkbox]")) {
    //     checkbox.addEventListener("change", handleCheckbox);
    // }

    // function handleRadio() { app.options[this.name] = this.value; }
    // for (let checkbox of document.querySelectorAll("input[type=radio]")) {
    //     checkbox.addEventListener("change", handleRadio);
    // }

    // function handleText() {
    //     this.value = this.value.trim();
    //     if (!this.value) {
    //         app.options.reset(this.id);
    //     } else {
    //         app.options[this.id] = this.value;
    //     }
    // }
    // for (let text of document.querySelectorAll("input[type=text],textarea")) {
    //     text.addEventListener("change", handleText);
    // }


    // modStyle.addEventListener("change", e => preview.style.cssText = this.value);

    // function handleToggle() { document.getElementById(this.dataset.toggle).classList.toggle("hidden", !this.checked); }

    // Avoid duplicated event listeners
    // const dependFuncs = new Map();

    // function init() {
        // const opts = app.options;
        // for (let key in opts) {
        //     const value = opts[key];
        //     const item = document.getElementById(key);
        //     if (item) {
        //         if (item.type === "checkbox") {
        //             item.checked = value;
        //         } else if (item.type === "text" || item.tagName === "TEXTAREA") {
        //             if (!item.placeholder)
        //                 item.placeholder = app.defaults[key];
        //             item.value = value;
        //         } else {
        //             item.value = value;
        //         }
        //     } else {
                // const radio = document.querySelector("input[name=" + key + "][value=" + value + "]");
                // if (radio)
                //     radio.checked = true;
            // }
        // }

        // preview.style.cssText = modStyle.value;

        // for (let elem of document.querySelectorAll("[data-depends]")) {
        //     const source = document.getElementById(elem.dataset.depends);

        //     if (!dependFuncs.has(elem))
        //         dependFuncs.set(elem, () => elem.disabled = !source.checked);

        //     source.addEventListener("change", dependFuncs.get(elem));
        //     elem.disabled = !source.checked;
        // }

        // for (let checkbox of document.querySelectorAll("input[data-toggle]")) {
        //     checkbox.addEventListener("change", handleToggle);
        //     handleToggle.apply(checkbox);
        // }
    // }
    // init();

    // Per-option reset functionality
    // function resetField(e) {
    //     e.preventDefault();
    //     const option = this.parentNode.querySelector("input[id],textarea[id],input[name]");
    //     app.options.reset(option.id || option.name)
    //         .then(() => this.parentNode.classList.add("resetDone"));
    // };
    // for (let reset of document.querySelectorAll("btn-reset")) {
    //     const content = document.importNode(document.getElementById("btnReset").content, true);
    //     content.firstElementChild.addEventListener("click", resetField);
    //     reset.parentNode.replaceChild(content, reset);
    // }
    // document.body.addEventListener("animationend", e => e.target.classList.remove("resetDone"));


    // Refresh button
    // {
        // const reloadTabs = () => browser.runtime.sendMessage("RELOAD");
        // const btnRefresh = document.getElementById("btnRefresh");
        // const btnText = btnRefresh.textContent;
        // btnRefresh.title = browser.i18n.getMessage("optsRefreshHover", [RATE_LIMIT / 1000 / 60]);

        // let timer;
        // let disabled = false;

        // function resetBtn() {
        //     clearInterval(timer);
        //     timer = null;
        //     btnRefresh.textContent = btnText;
        //     btnRefresh.disabled = disabled = false;
        // }

        // function btnRefreshTimer() {
        //     resetBtn();
        //     refreshRules({ check: true }).then(timeout => {
        //         if (timeout <= 0)
        //             return;

        //         let remaining = Math.ceil(timeout / 1000);

        //         btnRefresh.disabled = disabled = true;
        //         btnRefresh.textContent = `${btnText} - ${remaining--} seconds`;

        //         timer = setInterval(() => {
        //             if (remaining <= 0) {
        //                 resetBtn();
        //             } else {
        //                 btnRefresh.textContent = `${btnText} - ${remaining--} seconds`;
        //             }
        //         }, 1000);
        //     });
        // }

        // btnRefreshTimer();
        // btnRefresh.addEventListener("click", e => refreshRules({ force: e.ctrlKey }).then(reloadTabs).then(btnRefreshTimer));

        // window.addEventListener("keydown", e => {
        //     if (!e.repeat && e.key === "Control") {
        //         btnRefresh.classList.add("ctrl");
        //         btnRefresh.disabled = false;
        //     }
        // });
        // window.addEventListener("keyup", e => {
        //     if (e.key === "Control") {
        //         btnRefresh.classList.remove("ctrl");
        //         btnRefresh.disabled = disabled;
        //     }
        // });

    // }


    // Keep in sync with other options pages
    // browser.storage.onChanged.addListener(() => app.init().then(init));

    // Tell the background script a new options window was opened
    // browser.runtime.sendMessage("OPTIONS");
}, console.log);