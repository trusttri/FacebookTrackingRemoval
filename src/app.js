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
const HEADER_STYLE = 'padding: 5px 0px; font-size: 1.25rem; font-weight: 700; color:#1877F2; font-family: sans-serif;'   

const BUTTON_NODE = '<div aria-label="Close" class="oajrlxb2 gs1a9yip mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 rq0escxv nhd2j8a9 mg4g778l pfnyh3mw p7hjln8o tgvbjcpo hpfvmrgz i1ao9s8h esuyzwwr f1sip0of du4w35lb n00je7tq arfg74bv qs9ysxi8 k77z8yql btwxx1t3 abiwlrkh p8dawk7l lzcic4wl dwo3fsh8 g5ia77u1 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 pq6dq46d kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur" role="button" tabindex="0"></div>';
const BUTTON_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/8VnyvQJM2fQ.png&quot;); background-position: 0px -444px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>';
const BUTTON_SUB_NODE = '<div class="i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s s45kfl79 emlxlaya bkmhp75w spb7xbtv" data-visualcompletion="ignore" style="bottom:-8px;left:-8px;right:-8px;top:-8px"></div>';

// ICONS
const DISCONNECT_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/5yNj8IGYD_V.png&quot;); background-position: 0px -298px; background-size: 25px 400px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const INFORMATION_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/eCCDLUsDIXQ.png&quot;); background-position: 0px -300px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const ADVERTISERS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/LXdzc74h5Pi.png&quot;); background-position: 0px -914px; background-size: 33px 1658px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const AD_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/GsbYDvdGUgU.png&quot;); background-position: 0px -268px; background-size: 25px 476px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const SETTINGS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/bcLkvwxZS8v.png&quot;); background-position: 0px -270px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'

const titles = [
                    "Stop using data from partners to personalize ads", 
                    "Review/disconnect off-Facebook activity",
                    "Manage ad topics",
                    "Review advertisers",
                    "Ad settings",
                    "All Facebook settings"
                ]
const descriptions = [
                    "Decide if you want to see ads based on your activity on other businesses' websites/apps or offline.",
                    "Control your off-Facebook activity, which is your activity on other businesses’ websites/apps.",
                    "Choose ad topics you want to see less.",
                    "Review and hide ads from advertisers you’ve seen.",
                    "",
                    "You can check more ad-related features not included in Ad Settings (e.g., Your Facebook Information tab)."
                    ]
const urls = [
            "https://www.facebook.com/adpreferences/?section=data_from_partners",
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
// if (app.isChrome)
//     browser.runtime.sendMessage({chrome});

app.init().then(async () => {
    if (!app.options.enabled)
        return;

    const _userRules = parseHideRules(app.options.userRules);

    // function that detects and changes ads
    function hide(elem, label) {
        /* temporary code */
            
        let target;
        if (!elem || !(target = elem.closest(app.hide_rules.article_wrapper)))
            return false;

        return true;
    }

/////////////////////////// BEGIN OUR CODE ///////////////////////////
    
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
        console.log(icon)
        choice.querySelector('i').parentElement.appendChild(icon)
        choice.querySelector('i').remove()

        parent.appendChild(choice)
        

        choice.addEventListener("click", e => window.open(url));

        choice.addEventListener("mouseover", e => choice.classList.add('rnr61an3'))
        choice.addEventListener("mouseout", e => choice.classList.remove('rnr61an3'))
    }

    function createDashboard() {

        var menu_node_list = document.getElementsByClassName("j83agx80 btwxx1t3 taijpn5t sjgh65i0 cxgpxx05");

        // var menu_node_list = document.getElementById("dashboard");

        // We check to see if "createPost" doesn't return null to ensure the user is in the feed
        // var createPostExists = document.querySelector('.pybr56ya.dati1w0a.hv4rvrfc.osnr6wyh.lhclo0ds.j83agx80.bp9cbjyn')
        // if (!document.getElementById("dashboard") && createPostExists) {
         if (document.getElementsByClassName("_9vtf").length == 0 && !document.getElementById("dashboard") && location.href=="https://www.facebook.com/") {
            console.log("dashboard append")
            // create static dashboard header
            var dashboard_node = document.createElement("div");
            dashboard_node.id = "dashboard";
            dashboard_node.classList.add("j83agx80", "btwxx1t3", "taijpn5t", "sjgh65i0", "cxgpxx05");
            var menu_frame = document.createElement("div");
            menu_frame.classList.add("j83agx80", "l9j0dhe7", "k4urcfbm");
            var menu_style = document.createElement("div");
            menu_style.classList.add("rq0escxv", "l9j0dhe7", "du4w35lb", "hybvsw6c", "io0zqebd", "m5lcvass", "fbipl8qg", "nwvqtn77", "k4urcfbm", "ni8dbmo4", "stjgntxs", "sbcfpzgs");
            menu_style.style.borderRadius = "border-radius:max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px";
            var menu_bar_1 = document.createElement("div");
            menu_bar_1.classList.add("rq0escxv", "l9j0dhe7", "du4w35lb", "j83agx80", "rj1gh0hx", "buofh1pr", "g5gj957u", "hpfvmrgz", "i1fnvgqd", "gs1a9yip", "owycx6da", "btwxx1t3", "b5q2rw42", "lq239pai", "hddg9phg", "linmgsc8", "n851cfcs", "jb3vyjys", "rz4wbd8a", "qt6c0cv9", "a8nywdso");
            menu_bar_1.setAttribute("role", "tablist");
            var menu_bar_2 = document.createElement("div");
            menu_bar_2.classList.add("rq0escxv", "l9j0dhe7", "du4w35lb", "j83agx80", "cbu4d94t", "d2edcug0", "hpfvmrgz", "rj1gh0hx", "buofh1pr", "g5gj957u", "p8fzw8mz", "pcp91wgn", "ipjc6fyt", "qt6c0cv9");
            var menu_bar_3 = document.createElement("div");
            menu_bar_3.classList.add("rq0escxv", "l9j0dhe7", "du4w35lb", "j83agx80", "pfnyh3mw", "jifvfom9", "gs1a9yip", "owycx6da", "btwxx1t3", "hv4rvrfc", "dati1w0a", "mysgfdmx", "hddg9phg");
            var menu_bar_4 = document.createElement("div");
            menu_bar_4.classList.add("oajrlxb2", "qu0x051f", "esr5mh6w", "e9989ue4", "r7d6kgcz", "p7hjln8o", "f1sip0of", "n00je7tq", "arfg74bv", "qs9ysxi8", "k77z8yql", "abiwlrkh", "p8dawk7l", "lzcic4wl", "dwo3fsh8", "g5ia77u1", "mf7ej076", "goun2846", "ccm00jje", "s44p3ltw", "mk2mc5f4", "rt8b4zig", "n8ej3o3l", "agehan2d", "sk4xxmp2", "rq0escxv", "gmql0nx0", "nhd2j8a9", "j83agx80", "kvgmc6g5", "cxmmr5t8", "oygrvhab", "hcukyx3x", "jb3vyjys", "rz4wbd8a", "qt6c0cv9", "a8nywdso", "l9j0dhe7", "i1ao9s8h", "esuyzwwr", "tkr6xdv7");
            menu_bar_4.setAttribute("aria-hidden", "false");
            menu_bar_4.setAttribute("aria-selected", "true");
            menu_bar_4.setAttribute("role", "tab");
            menu_bar_4.setAttribute("tabindex", "0");
            var menu_bar_5 = document.createElement("div");
            menu_bar_5.classList.add("bp9cbjyn", "rq0escxv", "j83agx80", "pfnyh3mw", "frgo5egb", "l9j0dhe7", "buofh1pr", "cb02d2ww", "taijpn5t", "aj9r9hf7");
            // var menu_title = document.createElement("span");
            // menu_title.classList.add("d2edcug0", "hpfvmrgz", "qv66sw1b", "c1et5uql", "oi732d6d", "ik7dh3pa", "ht8s03o8", "a8c37x1j", "fe6kdd0r", "mau55g9w", "c8b282yb", "keod5gw0", "nxhoafnm", "aigsh9s9", "d9wwppkn", "iv3no6db", "jq4qci2q", "a3bd9o3v", "ekzkrbhg", "oo9gr5id", "hzawbc8m");
            // const headline_text = "Advertising Controls";
            // menu_title.insertAdjacentText("afterbegin", headline_text);
            var menu_title = document.createElement("div");
            menu_title.innerHTML = MENU_OPTION_NODE_WITHOUT_DESC;
            menu_title.textContent = "Advertising Controls";
            menu_title.style = HEADER_STYLE;

            // create close button
            var button_container = document.createElement("div");
            button_container.classList.add("nqmvxvec", "j83agx80", "jnigpg78", "cxgpxx05", "dflh9lhu", "sj5x9vvc", "scb9dxdr", "odw8uiq3");
            var button_frame = document.createElement("div");
            button_frame.innerHTML = BUTTON_NODE;
            var button_icon = document.createElement("div");
            button_icon.innerHTML = DROPDOWN_SVG;
            // button_icon.innerHTML = BUTTON_ICON;
            button_icon.firstChild.classList.add("dropdownButton");
            button_icon.firstChild.style.position = 'absolute';
            button_icon.firstChild.style.right = '10px';
            

    
            button_icon.firstChild.addEventListener("click", e => collapseDashboard());
            // var button_sub_frame = document.createElement("div");
            // button_sub_frame.innerHTML = BUTTON_SUB_NODE;
            button_frame.firstChild.appendChild(button_icon);
            button_container.appendChild(button_frame);
            // button_icon.parentNode.insertBefore(button_sub_frame, button_icon.parentNode.firstChild);


            // create intro text node
            var intro_frame_node = document.createElement("div");
            intro_frame_node.classList.add("ecm0bbzt", "hv4rvrfc", "ihqw7lf3", "dati1w0a");
            var intro_div_1 = document.createElement("div");
            intro_div_1.classList.add("j83agx80", "cbu4d94t", "ew0dbk1b", "irj2b8pg");
            var intro_div_2 = document.createElement("div");
            intro_div_2.classList.add("qzhwtbm6", "knvmm38d");
            var intro_span = document.createElement("span");
            intro_span.classList.add("d2edcug0", "hpfvmrgz", "qv66sw1b", "c1et5uql", "oi732d6d", "ik7dh3pa", "ht8s03o8", "a8c37x1j", "fe6kdd0r", "mau55g9w", "c8b282yb", "keod5gw0", "nxhoafnm", "aigsh9s9", "d9wwppkn", "iv3no6db", "jq4qci2q", "a3bd9o3v", "ekzkrbhg", "oo9gr5id", "hzawbc8m");
            const intro_text = "Control how Facebook uses your data and displays ads."
            intro_span.insertAdjacentText("afterbegin", intro_text);
            intro_div_2.appendChild(intro_span);
            intro_div_1.appendChild(intro_div_2);
            intro_frame_node.appendChild(intro_div_1);

            menu_bar_5.appendChild(menu_title);
            menu_bar_4.appendChild(menu_bar_5);
            menu_bar_3.appendChild(menu_bar_4);
            menu_bar_2.appendChild(menu_bar_3);
            menu_bar_1.appendChild(menu_bar_2);
            menu_style.appendChild(menu_bar_1);
            menu_frame.appendChild(menu_style);
            dashboard_node.appendChild(menu_frame);
            
            var menu_node = menu_node_list[0];
            var menu_parent;
            if(menu_node){
                menu_parent = menu_node.parentNode
            }else if(document.querySelector(".tr9rh885.k4urcfbm")){
                menu_parent = document.querySelector(".tr9rh885.k4urcfbm")
            }else{
               var main_div = document.querySelector('[role="main"]')
                if(main_div.firstChild.firstChild.firstChild){ // three depths is aesthetically pleasing
                    menu_parent = main_div.firstChild.firstChild.firstChild
                }else{
                    menu_parent = main_div.firstChild.firstChild // but if doesn't exist, try two
                }
            }

            menu_parent.insertBefore(dashboard_node, menu_parent.firstChild);
            menu_bar_2.parentNode.insertBefore(button_container, menu_bar_2.nextSibling);
            menu_bar_3.parentNode.insertBefore(intro_frame_node, menu_bar_3.nextSibling);

            // create static dashboard content
            var content_frame_1 = document.createElement("div");
            content_frame_1.classList.add( "abvwweq7", "ejjq64ki", "d2edcug0");
            var content_frame_2 = document.createElement("div");
            content_frame_2.classList.add("rq0escxv", "l9j0dhe7", "du4w35lb");

            for (let i = 0; i < titles.length; i++) {
                appendAdSettingOption(content_frame_2, titles[i], descriptions[i], urls[i], icons[i], i);
                if(i==1 || i==3){
                    var hr = document.createElement('div');
                    hr.innerHTML = HR_BREAK
                    content_frame_2.appendChild(hr)
                }
            }
            content_frame_1.appendChild(content_frame_2);

            menu_bar_1.parentNode.insertBefore(content_frame_1, menu_bar_1.nextSibling);

            // collpase if need be
            chrome.storage.local.get(["collapsed"], function(result){
                if (result.collapsed=="true") {
                    content_frame_1.style.display = "none";
                } else {
                    content_frame_1.style.display = "block";
                }
            });
            

        }

    }

    function refreshHome() {
        var home_button = document.querySelectorAll('[aria-label="Home"]');
        if (home_button.length > 0) {
            // console.log("Refresh home page");
            home_button[0].addEventListener('click', e => location.href="https://www.facebook.com/");
        }
    }

    function collapseDashboard() {
        var panel = document.getElementsByClassName("abvwweq7 ejjq64ki d2edcug0")[0]
        chrome.storage.local.get(["collapsed"], function(result){
            if (result.collapsed=="false") {
                chrome.storage.local.set({"collapsed": "true"}, function(){});
                panel.style.display = "none";
            }else {
                chrome.storage.local.set({"collapsed": "false"}, function(){});
                panel.style.display = "block";
            }
        });

    }



/////////////////////////// END OUR CODE ///////////////////////////

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

                    removeArticles(target, _userRules);
            
                    createDashboard();
                    refreshHome();
                    
                    
                    // browser.runtime.sendMessage({message: "URL"}).then(function (response) { 
                  
                    // });
         
                    // chrome.storage.local.get(["URL"], function(result){
                    //     console.log(result.URL)
                    //     if(result.URL=="https://www.facebook.com/"){
                    //         createDashboard();
                    //         refreshHome();
                    //     }else{
                
                    //     }
                    // });
                       
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

    // browser.runtime.sendMessage(app.options);


}).catch(console.warn);
