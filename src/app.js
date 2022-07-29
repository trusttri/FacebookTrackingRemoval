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


const MENU_OPTION_NODE_WITH_DESC = '<div class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz p7hjln8o esuyzwwr f1sip0of n00je7tq arfg74bv qs9ysxi8 k77z8yql abiwlrkh p8dawk7l lzcic4wl dwo3fsh8 rq0escxv nhd2j8a9 j83agx80 btwxx1t3 pfnyh3mw opuu4ng7 kj2yoqh6 kvgmc6g5 oygrvhab l9j0dhe7 i1ao9s8h du4w35lb bp9cbjyn cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr" role="menuitem" tabindex="0"><div class="bp9cbjyn tiyi1ipj j83agx80 taijpn5t tvfksri0"><i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(); background-position: 0px -404px; background-size: 33px 1388px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i></div><div class="bp9cbjyn j83agx80 btwxx1t3 buofh1pr i1fnvgqd hpfvmrgz"><div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg"><div class="qzhwtbm6 knvmm38d"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ht8s03o8 a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d9wwppkn iv3no6db jq4qci2q a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m" dir="auto">[Title]</span></div><div class="qzhwtbm6 knvmm38d"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ht8s03o8 a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 tia6h79c mdeji52x sq6gx45u a3bd9o3v b1v8xokw m9osqain hzawbc8m" dir="auto">[Description]</span></div></div></div><div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3" data-visualcompletion="ignore" style="border-radius: 4px;"></div></div>'
const MENU_OPTION_NODE_WITHOUT_DESC = '<div class="oajrlxb2 g5ia77u1 qu0x051f esr5mh6w e9989ue4 r7d6kgcz p7hjln8o esuyzwwr f1sip0of n00je7tq arfg74bv qs9ysxi8 k77z8yql abiwlrkh p8dawk7l lzcic4wl dwo3fsh8 rq0escxv nhd2j8a9 j83agx80 btwxx1t3 pfnyh3mw opuu4ng7 kj2yoqh6 kvgmc6g5 oygrvhab l9j0dhe7 i1ao9s8h du4w35lb bp9cbjyn cxgpxx05 dflh9lhu sj5x9vvc scb9dxdr" role="menuitem" tabindex="0"><div class="bp9cbjyn tiyi1ipj j83agx80 taijpn5t tvfksri0"><i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/ad7XYzccM9Z.png&quot;); background-position: 0px -677px; background-size: 33px 1186px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i></div><div class="bp9cbjyn j83agx80 btwxx1t3 buofh1pr i1fnvgqd hpfvmrgz"><div class="j83agx80 cbu4d94t ew0dbk1b irj2b8pg"><div class="qzhwtbm6 knvmm38d"><span class="d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ht8s03o8 a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d9wwppkn iv3no6db jq4qci2q a3bd9o3v ekzkrbhg oo9gr5id hzawbc8m" dir="auto">Copy link</span></div></div></div><div class="n00je7tq arfg74bv qs9ysxi8 k77z8yql i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s rnr61an3" data-visualcompletion="ignore" style="border-radius: 4px;"></div></div>'
const HR_BREAK = '<hr class="aov4n071 dhix69tm wkznzc2l bi6gxh9e pwoa4pd7">'
const DROPDOWN_SVG = '<svg fill=#3578E5 style="display: inline-block; vertical-align: text-bottom; padding-right: 2px;" viewBox="-1 -4.5 12 19" width="0.4em" height="0.4em" class="dropdown a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>'
const AD_BUTTON_STYLE = 'width: 8rem; padding: 0.4px 2px 2.6px 0px; text-align: center; border-radius: 20px; text-decoration: none; display: inline-block; font-size: 0.89rem; cursor: pointer; color: var(--blue-link); border: 1px solid var(--blue-link); font-family: sans-serif;'
const HEADER_STYLE = 'padding: 5px 12px; font-size: 1.1rem; font-weight: 550; color:#1877F2; font-family: sans-serif;'      

// ICONS
const DISCONNECT_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/5yNj8IGYD_V.png&quot;); background-position: 0px -298px; background-size: 25px 400px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const INFORMATION_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/eCCDLUsDIXQ.png&quot;); background-position: 0px -300px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const ADVERTISERS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/LXdzc74h5Pi.png&quot;); background-position: 0px -914px; background-size: 33px 1658px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const AD_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/GsbYDvdGUgU.png&quot;); background-position: 0px -268px; background-size: 25px 476px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const SETTINGS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/bcLkvwxZS8v.png&quot;); background-position: 0px -270px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'

const titles = [
                    "Ad settings",
                    "All Facebook settings"
                ]
const descriptions = [
                    "",
                    "You can check more ad-related features not included in Ad Settings (e.g., Your Facebook Information tab)."
                    ]
const urls = [
            "https://www.facebook.com/adpreferences/ad_settings",
            "https://www.facebook.com/settings"
            ]

const icons = [
                SETTINGS_ICON,
                SETTINGS_ICON
            ]



// NOTE: Needs to run in IFrames as well because some options pages are loaded as IFrames

// Activates page action since show_matches isn't supported...
// if (app.isChrome)
//     browser.runtime.sendMessage({});

app.init().then(async () => {
    if (!app.options.enabled)
        return;

    // const _userRules = parseHideRules(app.options.userRules);

    // function that detects and changes ads
    function hide(elem, label) {
        /* temporary code */
        augmentButton(elem) // our code for augmenting button on ads

        var ad_content = elem.closest(app.hide_rules.article_wrapper)
        var sponsor = ad_content.querySelector(".oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gpro0wi8.oo9gr5id.lrazzd5p")
        console.log(sponsor.querySelector('span').innerHTML)
        let target;
        if (!elem || !(target = elem.closest(app.hide_rules.article_wrapper)))
            return false;

        return true;
    }

/////////////////////////// BEGIN OUR CODE ///////////////////////////
    function augmentButton(elem) {
        var header = elem.parentElement.closest('.ll8tlv6m.j83agx80.btwxx1t3.n851cfcs.hv4rvrfc.dati1w0a.pybr56ya')

        if (header){
            var adBtn = header.querySelector('[aria-label="Actions for this post"]')

            if (adBtn){
                var three_dot_svg = adBtn.querySelector('svg')
                if(three_dot_svg && !three_dot_svg.classList.contains("dropdown")){
                
                    three_dot_svg.remove()

                    var settingsBtn = document.createElement('div');

                    //settingsBtn.innerHTML = DROPDOWN_SVG + "<span>ad settings</span>"
                    // const BTN_SETTINGS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: ur(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/bcLkvwxZS8v.png&quot;); background-position: 0px -270px; magin-left: 10px; background-size: auto; width: 12px; height: 12px; background-repeat: no-repeat; display: inline-block;"></i>'
                    const BTN_SETTINGS_ICON = '<img class="hu5pjgll" style="vertical-align: -0.45em; margin-left: 2px; margin-right: 2px;" height="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/wIxncaU7_F8.png" width="20" alt="">'
                    settingsBtn.innerHTML = BTN_SETTINGS_ICON + "<strong><span>ad settings</span></strong>" + DROPDOWN_SVG
                    settingsBtn.style = AD_BUTTON_STYLE

                    adBtn.insertBefore(settingsBtn, adBtn.firstChild);
                    adBtn.addEventListener("click", e => changeMenu());
                    adBtn.parentElement.parentElement.style.width = "8rem";

                }
            }
        }
        
    }

    function changeMenu() {
        if(document.querySelector(".j34wkznp.qp9yad78.pmk7jnqg.kr520xx4")){
            var menu = document.querySelector(".j34wkznp.qp9yad78.pmk7jnqg.kr520xx4")
            // var menu_nodes = menu.querySelectorAll('.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.p7hjln8o.esuyzwwr.f1sip0of.n00je7tq.arfg74bv.qs9ysxi8.k77z8yql.abiwlrkh.p8dawk7l.lzcic4wl.dwo3fsh8.rq0escxv.nhd2j8a9.j83agx80.btwxx1t3.pfnyh3mw.opuu4ng7.kj2yoqh6.kvgmc6g5.oygrvhab.l9j0dhe7.i1ao9s8h.du4w35lb.bp9cbjyn.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr')

            var menu_item_selector = '.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.p7hjln8o.esuyzwwr.f1sip0of.n00je7tq.arfg74bv.qs9ysxi8.k77z8yql.abiwlrkh.p8dawk7l.lzcic4wl.dwo3fsh8.rq0escxv.nhd2j8a9.j83agx80.btwxx1t3.pfnyh3mw.opuu4ng7.kj2yoqh6.kvgmc6g5.oygrvhab.l9j0dhe7.i1ao9s8h.du4w35lb.bp9cbjyn.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr'
            waitForElm(menu_item_selector).then((elm) => {

                //widen the menu
                // var innerDiv = menu.querySelector('.rpm2j7zs.k7i0oixp.gvuykj2m.ni8dbmo4.du4w35lb.q5bimw55.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.l56l04vs.r57mb794.l9j0dhe7.kh7kg01d.eg9m0zos.c3g1iek1.gs1a9yip.rq0escxv.j83agx80.cbu4d94t.rz4wbd8a.a8nywdso.smdty95z.c1zf3a5g.geg40m2u');
                var innerdiv_string = '.rpm2j7zs.k7i0oixp.gvuykj2m.ni8dbmo4.du4w35lb.q5bimw55.ofs802cu.pohlnb88.dkue75c7.mb9wzai9.l56l04vs.r57mb794.l9j0dhe7.kh7kg01d.eg9m0zos.c3g1iek1.gs1a9yip.rq0escxv.j83agx80.cbu4d94t.rz4wbd8a.a8nywdso.smdty95z.c1zf3a5g.geg40m2u'
                waitForElm(innerdiv_string).then((inner_elm) => { 
                    if(document.getElementsByClassName('FBTR-Menu').length == 0) {
                    inner_elm[0].style.width = '590px';
                    
                    var nodes = elm
                    var parent_node = nodes[0].parentElement
                    

                    var this_ad_header = document.createElement('div')
                    this_ad_header.className += 'FBTR-Menu';
                    this_ad_header.innerHTML = MENU_OPTION_NODE_WITH_DESC
                    this_ad_header.textContent = "For this ad"
                    this_ad_header.style = HEADER_STYLE;
                    parent_node.insertBefore(this_ad_header, nodes[0])

                    var hr = document.createElement('div');
                    hr.innerHTML = HR_BREAK
                    parent_node.appendChild(hr)
                    
                    var general_header = document.createElement('div')
                    general_header.innerHTML = MENU_OPTION_NODE_WITHOUT_DESC
                    general_header.textContent = "For all ads"
                    general_header.style = HEADER_STYLE;

                    parent_node.appendChild(general_header)


                    // add links to privacy controls
                    for (let i = 0; i < titles.length; i++) {
                        appendAdSettingOption(parent_node, titles[i], descriptions[i], urls[i], icons[i], i)
                        // if(i==1 || i==3){
                        //     var hr = document.createElement('div');
                        //     hr.innerHTML = HR_BREAK
                        //     parent_node.appendChild(hr)
                        // }
                    }
                }
                });   
               
            });

        }
    }


    function appendAdSettingOption(parent, title, description, url, icon_string, i) {
        var choice = document.createElement('div')
        if(i==4){
            choice.innerHTML = MENU_OPTION_NODE_WITHOUT_DESC
        }else{
            choice.innerHTML = MENU_OPTION_NODE_WITH_DESC
        }
        
        choice.style.marginBottom = "8px"

        var choiceTexts = choice.querySelectorAll("span")
        choiceTexts[0].textContent = title
        if(choiceTexts.length==2){
            choiceTexts[1].textContent = description
        }
        
        var icon = document.createElement('div')
        icon.innerHTML = icon_string
        choice.querySelector('i').parentElement.appendChild(icon)
        choice.querySelector('i').remove()

        parent.appendChild(choice)
        

        choice.addEventListener("click", e => window.open(url));

        choice.addEventListener("mouseover", e => choice.classList.add('rnr61an3'))
        choice.addEventListener("mouseout", e => choice.classList.remove('rnr61an3'))
    }


    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelectorAll(selector)[0]) {
                return resolve(document.querySelectorAll(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelectorAll(selector)[0]) {
                    resolve(document.querySelectorAll(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

/////////////////////////// END OUR CODE ///////////////////////////

    function removeArticles(node, rules) {
        // console.log("removeArticles")
        for (const [sel, texts] of Object.entries(rules)) {
            // console.log(sel)
            for (const e of selectAllWithBase(node, sel)) {
                // console.log('visibility')
                
      
                const elementText = visibleText(e);
                // console.log(e)
                // console.log(elementText);
                if ((texts.length === 0 || texts.includes(normalizeString(elementText))) && hide(e, elementText)) {
                    app.log(() => {
                        for (const s of sel.split(",")) {
                            if (e.matches(s)) {
                                return `>>> Rule matched for ${elementText}: ${sel} = ${s}`;
                            }
                        }
                    });
                }
            }
        }
    }


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
                    chrome.storage.local.set({"log_history": []}, function(){console.log("history log start!")});
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
                    if (app.options.delPixeled)
                        removeArticles(target, app.hide_rules.content);
                    // if (app.options.pendingRules)
                    //     removeArticles(target, app.hide_rules.content_pending);

                    // if (app.options.fixLinks)
                    //     forEachAdded(mutation, removeLinkTracking);

                    // if (app.options.internalRefs)
                    //     forEachAdded(mutation, stripRefs);

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
            // if (app.options.fixLinks) {
            //     opts.attributes = true;
            //     opts.attributeFilter = ["href"];
            // }
            return opts;
        })());

        _running = true;

        (async () => {
            // removeArticles(body, _userRules);
            // console.log(body)
            // if (app.options.delSuggest)
            //     removeArticles(body, app.hide_rules.suggestions_smart);
            if (app.options.delPixeled)
                removeArticles(body, app.hide_rules.content);
            // if (app.options.pendingRules)
            //     removeArticles(body, app.hide_rules.content_pending);

            // if (app.options.internalRefs)
            //     stripRefs(body);

            // if (app.options.fixLinks && removeLinkTracking(body) && document.getElementById("newsFeedHeading")) {
            //     const feed = document.getElementById("newsFeedHeading").parentNode;
            //     for (const stream of feed.querySelectorAll("div._4ikz")) {
            //         applyEventBlockers(stream);
            //     }
            // }
        })();
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
    // browser.runtime.onMessage.addListener(msg => {
    //     let styleElement = document.getElementById('fbtr-style');
    //     if (!styleElement) {
    //         styleElement = document.createElement('style');
    //         styleElement.id = 'fbtr-style';
    //         document.head.append(styleElement);
    //     }

    //     if (styleElement.sheet.cssRules.length)
    //         styleElement.sheet.deleteRule(0);

    //     if (msg) {
    //         // Timeout required for page to reparse
    //         setTimeout(() => styleElement.sheet.insertRule(msg), 50);
    //     }
    // });

    // browser.runtime.sendMessage(app.options);

}).catch(console.warn);
