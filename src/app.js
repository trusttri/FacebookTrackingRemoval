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
const DROPDOWN_SVG = '<svg fill=#3578E5 style="display: inline-block; vertical-align: text-bottom; padding-right: 2px;" viewBox="0 0 14 14" width="1em" height="1em" class="dropdown a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>'
const AD_BUTTON_STYLE = 'width: 100px; padding: 3px 10px; text-align: center; border-radius: 20px; text-decoration: none; display: inline-block; font-size: 0.98rem; cursor: pointer; color: #216fdb; border: 2px solid #98bff1; font-family: sans-serif;'
const HEADER_STYLE = 'padding: 5px 12px; font-size: 1.24rem; color:#1877F2; font-family: sans-serif;'      

// ICONS
// const DISCONNECT_ICON = '<img class="hu5pjgll lzf7d6o1" src="https://static.xx.fbcdn.net/rsrc.php/v3/yI/r/bnvx9uLOEsq.png" alt="" height="20" width="20">'
const DISCONNECT_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/5yNj8IGYD_V.png&quot;); background-position: 0px -298px; background-size: 25px 400px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const INFORMATION_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/eCCDLUsDIXQ.png&quot;); background-position: 0px -300px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const ADVERTISERS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yh/r/WFNA6bx75b9.png&quot;); background-position: 0px -247px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const AD_ICON = '<img class="hu5pjgll bixrwtb6" src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/7Ea3snATiso.png" style="height:20px;width:20px" alt="">'
const SETTINGS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/bcLkvwxZS8v.png&quot;); background-position: 0px -270px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'

const titles = [
                    "Stop using data from partners to personalize ads", 
                    "Review/clear/disconnect off-Facebook activity",
                    "Manage ad topics",
                    "Review advertisers",
                    "Ad settings",
                    "All Facebook settings"
                ]
const descriptions = [
                    "Decide if you want ads based on activity on other websites/apps or offline.",
                    "Control off-Facebook activity, which is your activity on other business’ websites/apps.",
                    "Choose ad topics you want to see less.",
                    "Review and hide ads from advertisers you’ve seen",
                    "",
                    "Shows tabs that include ad-related features not located in Ad Settings (e.g., Your Facebook Information tab)"
                    ]
const urls = [
            "",
            "https://www.facebook.com/off_facebook_activity",
            "https://www.facebook.com/adpreferences/ad_topics",
            "https://www.facebook.com/adpreferences/advertisers",
            "https://www.facebook.com/adpreferences/ad_settings",
            "https://www.facebook.com/settings"
            ]

const icons = [
                DISCONNECT_ICON, 
                DISCONNECT_ICON, 
                AD_ICON,
                ADVERTISERS_ICON,
                SETTINGS_ICON,
                SETTINGS_ICON
            ]



// NOTE: Needs to run in IFrames as well because some options pages are loaded as IFrames

// Activates page action since show_matches isn't supported...
if (app.isChrome)
    browser.runtime.sendMessage({});

app.init().then(async () => {
    if (!app.options.enabled)
        return;

    const _userRules = parseHideRules(app.options.userRules);

    function applyStyle(elem) {
        elem.classList.add(app.styleClass);
    }

    // function that detects and changes ads
    function hide(elem, label) {
        /* temporary code */
        augmentButton(elem) // our code for augmenting button on ads
            

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

                    settingsBtn.innerHTML = DROPDOWN_SVG + "<span>ad settings</span>"
                    settingsBtn.style = AD_BUTTON_STYLE

                    adBtn.insertBefore(settingsBtn, adBtn.firstChild);
                    adBtn.addEventListener("click", e => changeMenu());
                    adBtn.parentElement.parentElement.style.width = "120px";

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
                    inner_elm[0].style.width = '568px';
                    
                    var nodes = elm
                    var parent_node = nodes[0].parentElement
                    

                    var this_ad_header = document.createElement('div')
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
                        if(i==1 || i==3){
                            var hr = document.createElement('div');
                            hr.innerHTML = HR_BREAK
                            parent_node.appendChild(hr)
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
        

        if (i == 0) { // "Stop using data from partners to personalize ads", 
            choice.addEventListener("click", e =>  redirectAdSet());

        } else {
            choice.addEventListener("click", e => window.open(url));
        }

        choice.addEventListener("mouseover", e => choice.classList.add('rnr61an3'))
        choice.addEventListener("mouseout", e => choice.classList.remove('rnr61an3'))
    }

    function redirectAdSet() {
        chrome.storage.local.set({"clickPersonal": "true"}, function(){});
        window.open("https://www.facebook.com/adpreferences/ad_settings");
        // window.location.assign("https://www.facebook.com/adpreferences/ad_settings");
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

    // const supportedProtos = ["http:", "https:", "ftp:"];
    // function cleanLink(a, href) {
    //     cleanAttrs(a);
    //     a.target = "_blank";
    //     a.rel = "noreferrer noopener";
    //     try {
    //         if (supportedProtos.includes(new URL(href, origin).protocol))
    //             a.href = href;
    //         else
    //             app.log("Unsupported link protocol; leaving unchanged: " + href);
    //     } catch (_) {
    //         app.log("Link cleaning encountered an invalid url: " + href);
    //     }
    //     applyStyle(a);
    // }

    // function buildVideo(src, poster) {
    //     const video = document.createElement("video");
    //     video.preload = "metadata";
    //     video.controls = true;
    //     video.poster = poster;
    //     video.setAttribute("width", "100%");
    //     video.src = src;
    //     applyStyle(video);
    //     return video;
    // }

    /**** LINK TRACKING ****/

    // Desktop only
    // function cleanShimLinks(node) {
    //     const trackedLinks = selectAllWithBase(node, "a[onclick^='LinkshimAsyncLink.referrer_log']");
    //     for (const a of trackedLinks) {
    //         cleanLink(a, extractQuotedString(a.getAttribute("onmouseover")).replace(/\\(.)/g, '$1'));
    //         app.log("Removed tracking from shim link: " + a);
    //     }
    //     return trackedLinks.length;
    // }

    // Mobile only
    // function fixVideoLinks(node) {
    //     const videoLinks = selectAllWithBase(node, "div[data-sigil=inlineVideo],a[href^='/video_redirect/']");
    //     for (const vid of videoLinks) {
    //         const vidSrc = vid.tagName === 'DIV'
    //                        ? JSON.parse(vid.getAttribute("data-store")).src // Phone
    //                        : new URL(vid.href).searchParams.get('src'); // m.facebook

    //         const replaceVideo = target => {
    //             const img = target.querySelector(".img,img"); // phone,m.facebook
    //             const poster = extractQuotedString(img.style.backgroundImage) || img.src;
    //             const video = buildVideo(vidSrc, poster);
    //             target.parentNode.replaceChild(video, target);
    //             return video;
    //         };

    //         if (app.options.inlineVids) {
    //             app.log("Inlined video: " + replaceVideo(vid).src);
    //         } else {
    //             cleanAttrs(vid);
    //             const target = vid.cloneNode(true);
    //             applyStyle(target);
    //             target.classList.add("FBTR-SAFE")
    //             target.addEventListener("click", e => {
    //                 e.stopImmediatePropagation();
    //                 e.stopPropagation();
    //                 replaceVideo(target).play();
    //             }, true);
    //             vid.parentNode.replaceChild(target, vid);
    //             app.log("Cleaned deferred inline video: " + vidSrc)
    //         }
    //     }
    //     return videoLinks.length;
    // }

    // Desktop and Mobile
    // function cleanRedirectLinks(node) {
    //     const trackedLinks = selectAllWithBase(node, `a[href*='${document.domain.split(".").slice(-2).join(".")}/l.php?']`);
    //     for (const a of trackedLinks) {
    //         const newHref = new URL(a.href).searchParams.get('u');
    //         cleanLink(a, newHref);
    //         app.log("Removed tracking from redirect link: " + a);
    //     }
    //     return trackedLinks.length;
    // }

    // const fbclidFallback = /((?:[?&]|%3F|%26)fbclid=.*?)($|[?&]|%3F|%26)/ig;
    // function stripFBCLID(node) {
    //     const trackedLinks = selectAllWithBase(node, `a[href*='fbclid='i]`);
    //     for (const a of trackedLinks) {
    //         const link = new URL(a.href);

    //         link.searchParams.delete("fbclid");
    //         if (a.href === link.href) {
    //             link.href = link.href.replace(fbclidFallback, "$2");
    //         }

    //         if (a.href === link.href) {
    //             app.log("Failed to remove fbclid from link:\n -> " + a);
    //         } else {
    //             a.href = link.href;
    //             applyStyle(a);
    //             app.log("Removed fbclid from link: " + a);
    //         }
    //     }
    //     return trackedLinks.length;
    // }

    // function stripRefs(node) {
    //     let intLinks = 0;

    //     function _strip(a) {
    //         if (a.nodeName !== "A" || !app.domains.some(d => a.hostname.endsWith(d)))
    //             return;

    //         ++intLinks;
    //         applyEventBlockers(a.parentNode);
    //         delete a.dataset.ft;

    //         const linkBase = a.origin + a.pathname;
    //         if (a.hasAttribute("href")) {
    //             const orig = a.getAttribute("href"); // get unexpanded value
    //             const href = cleanLinkParams(orig, linkBase); // Don't assign here to avoid infinite mutation recursion

    //             if (href != orig) {
    //                 a.href = href;
    //                 applyStyle(a);
    //                 app.log("Cleaned internal href:\n\t" + orig + "\n\t" + a.getAttribute("href"));
    //             }
    //         }

    //         if (a.hasAttribute("ajaxify")) {
    //             const orig = a.getAttribute("ajaxify");
    //             a.setAttribute("ajaxify", cleanLinkParams(orig, linkBase));
    //             if (orig != a.getAttribute("ajaxify")) {
    //                 applyStyle(a);
    //                 app.log("Cleaned internal ajaxify link:\n\t" + orig + "\n\t" + a.getAttribute("ajaxify"));
    //             }
    //         }

    //         if (a.dataset.hovercard) {
    //             delete a.dataset.hovercardReferrer;
    //             const orig = a.dataset.hovercard;
    //             a.dataset.hovercard = cleanLinkParams(orig, linkBase);
    //             if (orig != a.dataset.hovercard) {
    //                 applyStyle(a);
    //                 app.log("Cleaned internal hovercard link:\n\t" + orig + "\n\t" + a.dataset.hovercard);
    //             }
    //         }
    //     }

    //     _strip(node);
    //     for (const a of node.getElementsByTagName('a')) {
    //         _strip(a);
    //     }
    //     return intLinks;
    // }

    // function fixGifs(node) {
    //     const gifs = selectAllWithBase(node, "div._5b-_");
    //     for (const g of gifs) {
    //         const target = g.closest("div._2lhm");
    //         if (!target)
    //             continue;

    //         const gif = target.querySelector("img.img").cloneNode(false);
    //         gif.classList.add("FBTR-SAFE");
    //         gif.dataset.placeholder = gif.src;
    //         gif.dataset.src = g.parentNode.href;

    //         const controls = target.querySelector("div._393-").parentNode.cloneNode(true);
    //         controls.classList.add("FBTR-SAFE");

    //         const toggle = (e) => {
    //             gif.src = controls.classList.toggle("fbtrHide")
    //                 ? gif.dataset.src
    //                 : gif.dataset.placeholder;
    //             stopPropagation(e);
    //         };
    //         gif.addEventListener("click", toggle, true);
    //         controls.addEventListener("click", toggle, true);

    //         const wrapper = document.createElement("div");
    //         wrapper.appendChild(gif);
    //         wrapper.appendChild(controls);

    //         for (const c of target.classList)
    //             wrapper.classList.add(c);

    //         target.parentNode.replaceChild(wrapper, target);
    //         app.log("Fixed GIF: " + gif.dataset.src);
    //     }
    // }

    // function removeLinkTracking(node) {
    //     const cleaned = cleanShimLinks(node)
    //         + fixVideoLinks(node)
    //         + cleanRedirectLinks(node)
    //         + stripFBCLID(node)
    //         ;
    //     fixGifs(node);

    //     if (cleaned)
    //         applyEventBlockers(node);

    //     return cleaned;
    // }

    /**** END LINK TRACKING ****/

    function removeArticles(node, rules) {
        for (const [sel, texts] of Object.entries(rules)) {
            // console.log(sel)
            for (const e of selectAllWithBase(node, sel)) {
                // console.log('visibility')
                // console.log(e);
                
                const elementText = visibleText(e);
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
            // console.log({
            //     "page" : location.href, "clicked_element": e.target, "timestamp": Date.now(), 
            //     "pageX": e.pageX, "pageY": e.pageY})
            var clickEvent = {
                "page" : location.href, 
                "clicked_element": e.target,
                "clicked_element_outer": e.target.outerHTML,
                "clicked_element_inner": e.target.innerHTML,
                "timestamp": Date.now(), 
                "pageX": e.pageX, 
                "pageY": e.pageY}

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

        function waitForBtn(selector) {
            return new Promise(resolve => {
                if (document.getElementsByClassName(selector)[0]) {
                    return resolve(document.getElementsByClassName(selector));
                }

                const observer = new MutationObserver(mutations => {
                    if (document.getElementsByClassName(selector)[0]) {
                        resolve(document.getElementsByClassName(selector));
                        observer.disconnect();
                    }
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true
                });
            });
        }

        let previousUrl = '';
        const observer = new MutationObserver(function(mutations) {
            if (location.href !== previousUrl) {
                previousUrl = location.href;

                if (location.href == "https://www.facebook.com/adpreferences/ad_settings") {
                    chrome.storage.local.get(["clickPersonal"], function(result){
                        if (result.clickPersonal == "true") {
                            // alert('Wait until a popup appears')
                            // const button_class = "oajrlxb2 gs1a9yip g5ia77u1 mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 rq0escxv nhd2j8a9 mg4g778l pfnyh3mw p7hjln8o kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x tgvbjcpo hpfvmrgz jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 i1ao9s8h esuyzwwr f1sip0of du4w35lb btwxx1t3 abiwlrkh p8dawk7l lzcic4wl ue3kfks5 pw54ja7n uo3d90p7 l82x9zwi a8c37x1j";
                            const button_class = "d2edcug0 hpfvmrgz qv66sw1b c1et5uql oi732d6d ik7dh3pa ht8s03o8 a8c37x1j fe6kdd0r mau55g9w c8b282yb keod5gw0 nxhoafnm aigsh9s9 d9wwppkn iv3no6db a5q79mjw g1cxx5fr ekzkrbhg oo9gr5id hzawbc8m";
                            waitForBtn(button_class).then((elm) => { 
                                elm[0].click();
                                chrome.storage.local.set({"clickPersonal": "false"}, function(){});
                            });
                        }
                    });

                }
            }
        });
        const config = {subtree: true, childList: true};
        observer.observe(document, config);

        new MutationObserver(async mutations => {
            for (const mutation of mutations) {
                if (mutation.type === "childList" && !SKIP.includes(mutation.target.nodeName)) {
                    const target = mutation.target;

                    removeArticles(target, _userRules);

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
            if (app.options.fixLinks) {
                opts.attributes = true;
                opts.attributeFilter = ["href"];
            }
            return opts;
        })());

        _running = true;

        (async () => {
            removeArticles(body, _userRules);
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

    browser.runtime.sendMessage(app.options);

}).catch(console.warn);
