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



// NOTE: Needs to run in IFrames as well because some options pages are loaded as IFrames

// Activates page action since show_matches isn't supported...
// if (app.isChrome)
//     browser.runtime.sendMessage({});

app.init().then(async () => {
    if (!app.options.enabled)
        return;

    const _userRules = parseHideRules(app.options.userRules);



    let _running = false;
    function run(body) {
        if (_running)
            return;

          // add click detect
        document.onclick = (e) => {
            var deepCopy = e.target.cloneNode(true)
            var parent = e.target.parentElement
            var clickEvent = {
                "page" : location.href, 
                "clicked_element_href": deepCopy.href,
                "clicked_element_outer": deepCopy.outerHTML,


                // "parent_1_outer": parent.outerHTML,
                // "parent_2_outer": parent.parentElement.outerHTML,

                "timestamp": Date.now(), 
                "pageX": e.pageX, 
                "pageY": e.pageY
            }

            chrome.storage.local.get(["log_history"], function(result){
                if (result.log_history) {
                    console.log(result.log_history)
                    result.log_history.push(clickEvent)
                    chrome.storage.local.set({"log_history": result.log_history}, function(){console.log(result.log_history)});
                }else{
                    chrome.storage.local.set({"log_history": [clickEvent]}, function(){console.log("history log start!")});
                }
            });

        }

        const SKIP = ["SCRIPT", "STYLE", "LINK"];
        const forEachAdded = (mutation, cb) => {
            for (const node of mutation.addedNodes) {
                if (node.nodeType == Node.ELEMENT_NODE && !SKIP.includes(node.nodeName) && !node.classList.contains(PROCESSED_CLASS)) {
                    cb(node);
                }
            }
        };

        new MutationObserver(async mutations => {
            for (const mutation of mutations) {
                if (mutation.type === "childList" && !SKIP.includes(mutation.target.nodeName)) {
                    const target = mutation.target;

                    // removeArticles(target, _userRules);

                    // if (app.options.delSuggest)
                    //     removeArticles(target, app.hide_rules.suggestions_smart);
                    // if (app.options.delPixeled)
                    //     removeArticles(target, app.hide_rules.content);
                    // if (app.options.pendingRules)
                    //     removeArticles(target, app.hide_rules.content_pending);

                    // if (app.options.fixLinks)
                    //     forEachAdded(mutation, removeLinkTracking);

                    // if (app.options.internalRefs)
                        // forEachAdded(mutation, stripRefs);

                    forEachAdded(mutation, node => node.classList.add(PROCESSED_CLASS));
                } else if (mutation.target) {
                    // if (app.options.fixLinks)
                    //     removeLinkTracking(mutation.target);
                    // if (app.options.internalRefs)
                    //     stripRefs(mutation.target);
                }
            }
        }).observe(body, (() => {
            const opts = { childList: true, subtree: true, characterData: false };
            if (app.options.fixLinks) {
                opts.attributes = true;
                opts.attributeFilter = ["href"];
            }
            return opts;
        })());

        _running = true;

    }

    if (document.body) {
        run(document.body);
    } else {
        new MutationObserver((_, self) => {
            const body = document.body;
            if (!body)
                return;
            self.disconnect();
            run(body);
        }).observe(document.documentElement, { childList: true });
    }

    // Fallback for chrome based browsers that don't support tabs.removeCSS
    browser.runtime.onMessage.addListener(msg => {
        let styleElement = document.getElementById('fbtr-style');
        if (!styleElement) {
            styleElement = document.createElement('style');
            styleElement.id = 'fbtr-style';
            document.head.append(styleElement);
        }

        if (styleElement.sheet.cssRules.length)
            styleElement.sheet.deleteRule(0);

        if (msg) {
            // Timeout required for page to reparse
            setTimeout(() => styleElement.sheet.insertRule(msg), 50);
        }
    });

    // browser.runtime.sendMessage(app.options);

}).catch(console.warn);
