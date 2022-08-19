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


const BATCH_SIZE = 10;
const QUERY_STRING_FOR_LAYOUT = ".thodolrn.ojvp67qx.taijpn5t.buofh1pr.j83agx80.aovydwv3.bqdfd6uv";

const POPUP = '.om3e55n1.g4tp4svg.l56fsmiw.alzwoclg.cqf1kptm.icdlwmnq.lq84ybu9.hf30pyar.bjrpyg6s.k0kqjr44.g6da2mms.yn3a2qjl.b52o6v01.a96hb305.qdjxsfl2.jydkgpbv.pikqa3ac.s0xl3u4v.r1od7cao.tu41pnuf.mfclru0v'

const POPUP_TYPE_MAC = '.gvxzyvdx.aeinzg81.t7p7dqev.gh25dzvf.tb6i94ri.gupuyl1y.i2onq4tn.b6ax4al1.gem102v4.ncib64c9.mrvwc6qr.sx8pxkcf.f597kf1v.cpcgwwas.m2nijcs8.ib8x7mpr.rq8durfe.luz166fr.o48pnaf2.pbevjfx6.hsphh064'
const POPUP_TYPE_WINDOWS = '.gvxzyvdx.aeinzg81.t7p7dqev.gh25dzvf.exr7barw.b6ax4al1.gem102v4.ncib64c9.mrvwc6qr.sx8pxkcf.f597kf1v.cpcgwwas.bx1hu7np.hxfwr5lz.rq8durfe.luz166fr.o48pnaf2.pbevjfx6.hsphh064'

const POPUP_SUBTYPE_MAC = '.gvxzyvdx.aeinzg81.t7p7dqev.gh25dzvf.tb6i94ri.gupuyl1y.i2onq4tn.b6ax4al1.gem102v4.ncib64c9.mrvwc6qr.sx8pxkcf.f597kf1v.cpcgwwas.m2nijcs8.ib8x7mpr.rq8durfe.luz166fr.o48pnaf2.pbevjfx6.hsphh064'
const POPUP_SUBTYPE_WINDOWS = '.gvxzyvdx.aeinzg81.t7p7dqev.gh25dzvf.exr7barw.b6ax4al1.gem102v4.ncib64c9.mrvwc6qr.sx8pxkcf.f597kf1v.cpcgwwas.bx1hu7np.hxfwr5lz.rq8durfe.luz166fr.o48pnaf2.pbevjfx6.hsphh064'

const AD_TOPIC_MAC = '.b6ax4al1.i54nktwv.z2vv26z9.om3e55n1.gvxzyvdx.aeinzg81.dlyfsiuo.t7p7dqev.gh25dzvf.gem102v4.ncib64c9.mrvwc6qr.sx8pxkcf.f597kf1v.cpcgwwas.tb6i94ri.gupuyl1y.fq4sesb3.eawxt9kr.o48pnaf2.pbevjfx6.ztn2w49o.thx2cq4v.dpb8o5vd'
const AD_TOPIC_WINDOWS = '.b6ax4al1.i54nktwv.z2vv26z9.om3e55n1.gvxzyvdx.aeinzg81.dlyfsiuo.t7p7dqev.gh25dzvf.gem102v4.ncib64c9.mrvwc6qr.sx8pxkcf.f597kf1v.cpcgwwas.fq4sesb3.eawxt9kr.o48pnaf2.pbevjfx6.ztn2w49o.ckkis2m5.ib8x7mpr'

const SIDE_AD = "alzwoclg n3hqoq4p r86q59rh b3qcqh3k fq87ekyn p5mefues j32recxq j94dm2s7 trbvugp6 fsf7x5fv no6h3tfh m8h3af8h h07fizzr kjdc1dyq jbg88c62 ztn2w49o q46jt4gp b0eko5f3 r5g9zsuq fwlpnqze ie32ypzk him0ws1g"

const FB_URL = "https://www.facebook.com/"
const DATA_PARTNERS_POPUP = "https://www.facebook.com/adpreferences/?section=audience_based_advertising"
const AUDIENCE_POPUP = "https://www.facebook.com/adpreferences/?section=audience_based_advertising"
// NOTE: Needs to run in IFrames as well because some options pages are loaded as IFrames

// Activates page action since show_matches isn't supported...
// if (app.isChrome)
//     browser.runtime.sendMessage({});

app.init().then(async () => {
    if (!app.options.enabled)
        return;

    const _userRules = parseHideRules(app.options.userRules);
    
    if (location.href==FB_URL) {
        var topBarExist = document.querySelector(QUERY_STRING_FOR_LAYOUT)
        var sideAdExist = document.getElementsByClassName(SIDE_AD).length > 0;
        var layout = ""
        chrome.storage.local.get(["layout_type"], function(l){
            if(l.layout_type=="" || l.layout_type==null) {
                if(topBarExist){
                    if(sideAdExist) {
                        layout = "no_dropdown_icon / side_ad"
                    }else {
                         layout = "no_dropdown_icon / no_side_ad"
                    }
                }else{
                    if(sideAdExist) {
                        layout = "dropdown_icon / side_ad"
                    }else {
                         layout = "dropdown_icon / no_side_ad"
                    }
                }

                chrome.storage.local.set({"layout_type": layout}, function(){console.log(layout)});
            }
        })
    
    }

    chrome.storage.local.set({"browser_size": [[window.innerHeight, window.innerWidth, Date.now()]]}, function(){});
          
    
    function findClosestElementWithText(e) {
        const outliers = ["View", "Edit", "Close", "Use Activity Log", "Limit Past Posts", "Turn off", "Hide Ads", "Undo", "See more"]
        if ((e.innerText === '') || (outliers.includes(e.innerText)) || (e.innerText === null) || (e.innerText === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithText(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            console.log("---inner text---")
            console.log(e.innerText)
            return e
        }
    }

    function findClosestElementWithAriaLabelParent(e) {
        if ((e.ariaLabel === '') || (e.ariaLabel === null) || (e.ariaLabel === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithAriaLabelParent(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            console.log("---aria label---")
            console.log(e.ariaLabel)
            return e
        }
    }

    function findClosestElementWithAriaLabelChild(e) {
        console.log(e.querySelector('[aria-label]'))
        return e.querySelector('[aria-label]')
    }

    function findClosestElementWithName(e) {
        if ((e.name === '') || (e.name === null) || (e.name === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithName(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            // console.log("---name---")
            // console.log(e.name)
            return e
        }
    }

    function findClosestElementWithAriaChecked(e) {
        if ((e.ariaChecked === '') || (e.ariaChecked === null) || (e.ariaChecked === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithAriaChecked(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            console.log("---aria checked---")
            console.log(e.ariaChecked)
            return e.ariaChecked
        }
    }

    function findClosestElementWithRole(e) {
        if ((e.role === '') || (e.role === null) || (e.role === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithRole(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            console.log("---role---")
            console.log(e.role)
            return e.role
        }
    }

    function logPopupType() {
        var popup = document.querySelector(POPUP)
        if(popup) {
            var popupType = popup.querySelector(POPUP_TYPE_MAC)
            if(popupType==null){
                popupType = popup.querySelector(POPUP_TYPE_WINDOWS)
            }
            console.log(popupType);
            if(popupType) {
                console.log(popupType.innerText)
                return popupType.innerText
            } else {
                return 'none'
            }
        }
        return 'none'
    }

    function logPopupHeader() {
        var popup = document.querySelector(POPUP)
        if(popup) {
            var popupHeader = popup.querySelectorAll(POPUP_SUBTYPE_MAC)
            if(popupHeader.length < 2){
                popupHeader = popup.querySelectorAll(POPUP_SUBTYPE_WINDOWS)
            }
            
            if(popupHeader.length > 2) {
                console.log(popupHeader[2].innerText)
                return popupHeader[2].innerText
            } else {
                return 'none'
            }
        }
        return 'none'
    }

    function logPopupInData() {
        var popup = document.querySelector(POPUP)
        if(popup) {
            var popupType = popup.querySelector(POPUP_TYPE_MAC)
            if(popupType==null){
                popupType = popup.querySelector(POPUP_TYPE_WINDOWS)
            }
            console.log(popupType);
            if(popupType) {
                // console.log(popupType.innerText)
                chrome.storage.local.get(["prolific_ID"], function(p){
                    if (p.prolific_ID) {
                        chrome.storage.local.get(["popup_history"], function(r){
                            var popupEvent = [popupType.innerText, Date.now()]
                            if (r.popup_history) {
                                r.popup_history.push(popupEvent)
                                chrome.storage.local.set({"popup_history": r.popup_history}, function(){
                                    console.log(r.popup_history)
                                });
                            }else{
                                chrome.storage.local.set({"popup_history": [popupEvent]}, function(){
                                    console.log(r.popup_history)
                                });
                            }
                        });
                    }
                });
                
            } else {
                console.log('none')
            }
        }
    }

    function reloadPopup() {
        if(location.href==DATA_PARTNERS_POPUP || location.href==AUDIENCE_POPUP) {
            var reloadBtn = document.querySelector('[aria-label="Reload Page"]')
            if (reloadBtn) { location.reload() }
        }
    }

    let _running = false;
    function run(body) {
        if (_running)
            return;
        window.addEventListener('resize', function(){
            chrome.storage.local.get(["browser_size"], function(res){
                if(res.browser_size) {
                    res.browser_size.push([window.innerHeight, window.innerWidth, Date.now()])
                    chrome.storage.local.set({"browser_size": res.browser_size}, function(){
                        console.log(res.browser_size)
                    });
                }else{
                    chrome.storage.local.set({"browser_size": [[window.innerHeight, window.innerWidth, Date.now()]]}, function(){});
                }
            })
        });

          // add click detect
        document.onclick = (e) => {

            var clickEvent = {
                "page" : location.href, 
                "clicked_element": e.target.cloneNode(true).outerHTML,
                "timestamp": Date.now(),
                "w": window.innerWidth,
                "h": window.innerHeight
            }

            
            var closest_element_with_inner_text = findClosestElementWithText(e.target)
            if (typeof(closest_element_with_inner_text) !== "string"){
                clickEvent['closest_inner_text'] = closest_element_with_inner_text.cloneNode(true).outerHTML
            }

            var closest_element_with_arialabel_parent = findClosestElementWithAriaLabelParent(e.target)
            if (typeof(closest_element_with_arialabel_parent) !== "string"){
                clickEvent['closest_arialabel_parent'] = closest_element_with_arialabel_parent.cloneNode(true).outerHTML
            }

            var closest_element_with_arialabel_child = findClosestElementWithAriaLabelChild(e.target)
            if (closest_element_with_arialabel_child !== null){
                clickEvent['closest_arialabel_child'] = closest_element_with_arialabel_child.cloneNode(true).outerHTML
            }

            var closest_element_with_name = findClosestElementWithName(e.target)
            if (typeof(closest_element_with_name) !== "string"){
                clickEvent['closest_name'] = closest_element_with_name
            }

            var closest_element_with_role = findClosestElementWithRole(e.target)
            if (closest_element_with_role !== 'none'){
                clickEvent['closest_role'] = closest_element_with_role
            }


            var closest_element_with_ariachecked = findClosestElementWithAriaChecked(e.target)
            if (closest_element_with_ariachecked !== 'none'){
                clickEvent['closest_ariachecked'] = closest_element_with_ariachecked
            }

            var popupType = logPopupType()
            if (popupType  !== "none") {
                clickEvent['popupType'] = popupType
            }

            var popupHeader = logPopupHeader()
            if (popupHeader !== "none") {
                clickEvent['popupHeader'] = popupHeader
            }

            const ad_topic_options = ["No Preference", "See Less"]
            var is_ad_topic_popup = ad_topic_options.includes(e.target.innerText) || ad_topic_options.includes(closest_element_with_inner_text.innerText)

            try{
                var ad_topic='';
                if(is_ad_topic_popup && location.href==="https://www.facebook.com/adpreferences/ad_topics"){
                    var ad_topic_exist = document.querySelector(AD_TOPIC_MAC)
                    if(ad_topic_exist){
                        ad_topic = ad_topic_exist.innerText
                    }else{
                        var ad_topic_exist = document.querySelector(AD_TOPIC_WINDOWS)
                        if(ad_topic_exist){
                            ad_topic = ad_topic_exist.innerText
                        }
                    }
                    clickEvent['ad_topic'] = ad_topic
                }
            } catch(err) {
                clickEvent['error'] = err.message;
            }

            console.log(clickEvent)

            chrome.storage.local.get(["prolific_ID"], function(result){
                if (result.prolific_ID) {
                    chrome.storage.local.get(["log_history"], function(result){
                        if (result.log_history) {
                            result.log_history.push(clickEvent)
                            chrome.storage.local.set({"log_history": result.log_history}, function(){
                                console.log(result.log_history)
                            });
                            if (result.log_history.length % BATCH_SIZE == 0) {
                                console.log('periodic submit')
                                browser.runtime.sendMessage("PERIODIC_SUBMIT");
                            }

                        }else{
                            chrome.storage.local.set({"log_history": [clickEvent]}, function(){
                                console.log(result.log_history)
                            });
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
                    logPopupInData();
                    reloadPopup();

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
