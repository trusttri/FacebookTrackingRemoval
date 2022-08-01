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


    function findClosestElementWithText(e) {
        const outliers = ["View", "Edit", "Close", "Use Activity Log", "Limit Past Posts", "Turn off", "Hide Ads", "Undo", "See more"]
        if ((e.innerText === '') || (outliers.includes(e.innerText)) || (e.innerText === null) || (e.innerText === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithText(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            console.log(e.innerText)
            return e
        }
    }

    function findClosestElementWithAriaLabel(e) {
        if ((e.ariaLabel === '') || (e.ariaLabel === null) || (e.ariaLabel === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithAriaLabel(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            console.log(e.ariaLabel)
            return e
        }
    }

    function findClosestElementWithName(e) {
        if ((e.name === '') || (e.name === null) || (e.name === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithName(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            console.log(e.name)
            return e
        }
    }


    let _running = false;
    function run(body) {
        if (_running)
            return;

          // add click detect
        document.onclick = (e) => {

            var clickEvent = {
                "page" : location.href, 
                "clicked_element_outer": e.target.cloneNode(true).outerHTML,
                "timestamp": Date.now()
            }

            var closest_element_with_name = findClosestElementWithName(e.target)
            if (typeof(closest_element_with_name) !== "string"){
                clickEvent['closest_element_with_name'] = closest_element_with_name.cloneNode(true).outerHTML
            }

            var closest_element_with_inner_text = findClosestElementWithText(e.target)
            if (typeof(closest_element_with_inner_text) !== "string"){
                clickEvent['closest_element_with_inner_text'] = closest_element_with_inner_text.cloneNode(true).outerHTML
            }

            var closest_element_with_arialabel = findClosestElementWithAriaLabel(e.target)
            if (typeof(closest_element_with_arialabel) !== "string"){
                clickEvent['closest_element_with_arialabel'] = closest_element_with_arialabel.cloneNode(true).outerHTML
            }

            const ad_topic_options = ["No Preference", "See Less"]
            var is_ad_topic_popup = ad_topic_options.includes(e.target.innerText) || ad_topic_options.includes(closest_element_with_inner_text.innerText)

            if(is_ad_topic_popup && location.href==="https://www.facebook.com/adpreferences/ad_topics"){
                var ad_topic = document.getElementsByClassName('a8c37x1j hihg3u9x ggxiycxj l9j0dhe7 d2edcug0 hpfvmrgz lis9t9rg qv66sw1b c1et5uql fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 oi732d6d ik7dh3pa d548f0b1 m6dqt4wy hnhda86s oo9gr5id hzawbc8m qg6bub1s h6olsfn3')[0].innerText
                clickEvent['ad_topic'] = ad_topic
            }

            chrome.storage.local.get(["prolific_ID"], function(result){
                if (result.prolific_ID) {
                    chrome.storage.local.get(["log_history"], function(result){
                        if (result.log_history) {
                            result.log_history.push(clickEvent)
                            chrome.storage.local.set({"log_history": result.log_history}, function(){console.log(result.log_history)});
                            if (result.log_history.length % 5 == 0) {
                                browser.runtime.sendMessage("PERIODIC_SUBMIT");
                            }

                        }else{
                            chrome.storage.local.set({"log_history": [clickEvent]}, function(){console.log(result.log_history)});
                        }
                    });
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
