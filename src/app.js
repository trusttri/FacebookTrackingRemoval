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
const DROPDOWN_SVG = '<svg fill=white style="display: inline-block; vertical-align: middle; margin-bottom: 0.25rem; margin-right: 0.21rem;" viewBox="-1 -4.5 12 19" width="0.4em" height="0.4em" class="dropdown a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>'
const AD_BUTTON_STYLE = 'width: 8rem; padding: 0.125rem 0.13rem 0.125rem 0.13rem; text-align: center; border-radius: 20px; text-decoration: none; display: inline-block; font-size: 0.89rem; cursor: pointer; color: white; background-color: rgb(24, 119, 242); border: 1px solid var(--blue-link); font-family: sans-serif;'
const HEADER_STYLE = 'padding: 5px 12px; font-size: 1.1rem; font-weight: 550; color:#1877F2; font-family: sans-serif;'      

// ICONS
const DISCONNECT_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/5yNj8IGYD_V.png&quot;); background-position: 0px -298px; background-size: 25px 400px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const INFORMATION_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/eCCDLUsDIXQ.png&quot;); background-position: 0px -300px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const ADVERTISERS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/LXdzc74h5Pi.png&quot;); background-position: 0px -914px; background-size: 33px 1658px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const AD_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/GsbYDvdGUgU.png&quot;); background-position: 0px -268px; background-size: 25px 476px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const SETTINGS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/bcLkvwxZS8v.png&quot;); background-position: 0px -270px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
// const BTN_SETTINGS_ICON = '<img class="hu5pjgll" style="vertical-align: middle; margin-left: 0.12rem; margin-right: 0.17rem;;" height="20" src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/wIxncaU7_F8.png" width="20" alt="">'
const BTN_SETTINGS_ICON ='<svg xmlns="http://www.w3.org/2000/svg" class="settingsBtn" viewBox="0 0 512 512" width="1rem" height="1rem" style="vertical-align: middle; margin-left: 0.12rem; margin-right: 0.17rem; fill: white;"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>'
                  
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

const BATCH_SIZE = 25;

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
                if(three_dot_svg && !three_dot_svg.classList.contains("dropdown") && !three_dot_svg.classList.contains("settingsBtn")){
                
                    three_dot_svg.remove()

                    var settingsBtn = document.createElement('div');

                    //settingsBtn.innerHTML = DROPDOWN_SVG + "<span>ad settings</span>"
                    // const BTN_SETTINGS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: ur(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/bcLkvwxZS8v.png&quot;); background-position: 0px -270px; magin-left: 10px; background-size: auto; width: 12px; height: 12px; background-repeat: no-repeat; display: inline-block;"></i>'
                    settingsBtn.innerHTML = BTN_SETTINGS_ICON + "<strong><span>ad settings</span></strong>" + DROPDOWN_SVG
                    settingsBtn.style = AD_BUTTON_STYLE

                    adBtn.insertBefore(settingsBtn, adBtn.firstChild);
                    adBtn.addEventListener("click", e => changeMenu());
                    adBtn.parentElement.parentElement.style.width = "8.2rem";

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
                "timestamp": Date.now(), 
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
                            if (result.log_history.length % BATCH_SIZE == 0) {
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
