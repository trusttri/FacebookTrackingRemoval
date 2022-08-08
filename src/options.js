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

    function submitButton() {
        var prolific_ID = document.getElementById("sessionID").value;
        chrome.storage.local.set({"prolific_ID": prolific_ID}, function(){});

        if (prolific_ID.length === 0) {
            document.getElementById("result").innerHTML = "Please type in your Proflic ID before starting";
            document.getElementById("result").style.color = "white";
            document.getElementById("resultBox").className = "callout"
        } else {
            document.getElementById("id_submit").disabled = true;
            document.getElementById("result").textContent = "Signing up...";
            document.getElementById("result").style.color = "white";
            document.getElementById("resultBox").className = "callout"
            browser.runtime.sendMessage("SIGN_UP");
        }
    }

     document.getElementById('mainForm').addEventListener('keypress', function(e) {
        if (e.key === 'Enter'){
            submitButton();
        }
   });


    document.getElementById("sessionID").addEventListener("keyup", function(){
        chrome.storage.local.set({"prolific_ID" : document.getElementById("sessionID").value}, function(){});
    })

    
    chrome.storage.local.get(["started"], function(result){
        if ((result.started == "true") || (result.started == "undefined")) {
            document.getElementById("result").innerHTML = "Please read the Qualtrics survey instructions<br>and complete the tasks.";
            document.getElementById("result").style.color = "white";
            document.getElementById("resultBox").className = "study_start"
            document.getElementById("id_submit").disabled=true;
            chrome.storage.local.get(["prolific_ID"], function(result){
                if (result.prolific_ID) {
                    document.getElementById("sessionID").value = result.prolific_ID;
                }
            })
        }
    })
    
    chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.status === "submitted") {
            document.getElementById("result").innerHTML = "Your session data has been safely submitted." + "<br>"
            document.getElementById("result").innerHTML +=  "Session ID: " + "<span style='background-color: #3573d3; color: white; padding: 1px 5px 1px 5px'>" + request.data["session_path_id"] + "</span>" +"<br>" + "<strong>" + "Copy the session ID and enter it in the Qualtrics survey." + "</strong>"
            document.getElementById("resultBox").className = "default"
            document.getElementById("result").style.color = "black";
            document.getElementById("end").disabled=true;

        } else if (request.status === "error") {
            document.getElementById("result").innerHTML = "System error. Please reach out to <br> ad-control-study@umich.edu.";
            document.getElementById("result").style.color = "white";
            document.getElementById("resultBox").className = "callout"
        } else if (request.status === "signed_up") {
            // deliberately twice
            browser.runtime.sendMessage("RELOAD");
            browser.runtime.sendMessage("RELOAD");
            document.getElementById("id_submit").disabled=true;
            document.getElementById("sessionID").disabled=true;
            document.getElementById("result").innerHTML = "Please read the Qualtrics survey instructions<br>and complete the tasks.";
            document.getElementById("result").style.color = "white";
            document.getElementById("resultBox").className = "study_start"
            chrome.storage.local.set({"started" : "true"}, function(){});
        }
    });

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
                chrome.storage.local.get(["prolific_ID"], function(result){
                    if (result.prolific_ID) {
                        if (result.prolific_ID.length == 0) {
                            document.getElementById("result").innerHTML = "Please first enter your Prolific ID and end the session.";
                            document.getElementById("resultBox").className = "callout"
                            document.getElementById("result").style.color = "white";
                        } else {
                            document.getElementById("result").textContent = "Submitting the results...";
                            document.getElementById("result").style.color = "white";
                            document.getElementById("resultBox").className = "progress"
                            browser.runtime.sendMessage("FINAL_SUBMIT"); 
                        }
                    }
                });
           }
        });
        
    })

    //submit prolific_id
    document.getElementById("id_submit").addEventListener("click", function() {
        console.log("submit prolific id");
        submitButton()
    });

    document.getElementById("reset").addEventListener("click", function(){
        chrome.storage.local.set({"log_history": []}, function(){console.log('reset')});
        document.getElementById("id_submit").disabled=false;
        document.getElementById("sessionID").disabled=false;
        document.getElementById("end").disabled=false;
        document.getElementById("result").style.color = "white";
        document.getElementById("result").innerHTML = "<span style='padding: 1px 5px 1px 5px'> You cleared the previous session. <br> Enter your Prolific ID and click <b>start session</b>. </span>";
        document.getElementById("resultBox").className = "callout"
        chrome.storage.local.set({"started": "false"}, function(){});
        chrome.storage.local.set({"prolific_ID": ""}, function(){});
    })


}, console.log);