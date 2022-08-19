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


const MENU_OPTION_NODE_WITH_DESC = '<div class="qi72231t nu7423ey n3hqoq4p r86q59rh b3qcqh3k fq87ekyn s5oniofx rn8ck1ys s3jn8y49 o9erhkwx dzqi5evh hupbnkgi hvb2xoa8 f14ij5to l3ldwz01 icdlwmnq qgrdou9d bdao358l fsf7x5fv alzwoclg jl2a5g8c jez8cy9q sb3qexpo l7miuv0d m8h3af8h kjdc1dyq om3e55n1 cr00lzj9 g4tp4svg i85zmo3j q46jt4gp b0eko5f3 r5g9zsuq fwlpnqze" role="menuitem" tabindex="0"><div class="i85zmo3j lpqsk9lh alzwoclg jcxyg2ei tpvapw4o"><img class="gneimcpu b0w474w7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yT/r/MdmhsmOJOCq.png" alt="" height="20" width="20"></div><div class="i85zmo3j alzwoclg jl2a5g8c cgu29s5g sl27f92c aeinzg81"><div class="alzwoclg cqf1kptm siwo0mpr gu5uzgus"><div class="jroqu855 nthtkgg5"><span class="gvxzyvdx aeinzg81 t7p7dqev gh25dzvf tb6i94ri gupuyl1y i2onq4tn b6ax4al1 gem102v4 ncib64c9 mrvwc6qr sx8pxkcf f597kf1v cpcgwwas f5mw3jnl hxfwr5lz k1z55t6l oog5qr5w tpi2lg9u pbevjfx6 ztn2w49o" dir="auto">Report ad</span></div><div class="jroqu855 nthtkgg5"><span class="gvxzyvdx aeinzg81 t7p7dqev gh25dzvf tb6i94ri gupuyl1y i2onq4tn b6ax4al1 gem102v4 ncib64c9 mrvwc6qr sx8pxkcf f597kf1v cpcgwwas pk1vzqw1 szxhu1pg glosn74e oog5qr5w tes86rjd rtxb060y ztn2w49o" dir="auto">Tell us about a problem with this ad.</span></div></div></div><div class="o9erhkwx dzqi5evh hupbnkgi hvb2xoa8 z6erz7xo on4d8346 jkp44r48 l10tt5db s8sjc6am myo4itp8 ekq1a7f9 pym4i58u ldembo95 mwa1sm0y hi696u2r" data-visualcompletion="ignore" style="border-radius: 4px;"></div></div>'
const MENU_OPTION_NODE_WITHOUT_DESC = '<div class="qi72231t nu7423ey n3hqoq4p r86q59rh b3qcqh3k fq87ekyn s5oniofx rn8ck1ys s3jn8y49 o9erhkwx dzqi5evh hupbnkgi hvb2xoa8 f14ij5to l3ldwz01 icdlwmnq qgrdou9d bdao358l fsf7x5fv alzwoclg jl2a5g8c jez8cy9q sb3qexpo l7miuv0d m8h3af8h kjdc1dyq om3e55n1 cr00lzj9 g4tp4svg i85zmo3j q46jt4gp b0eko5f3 r5g9zsuq fwlpnqze" role="menuitem" tabindex="0"><div class="i85zmo3j lpqsk9lh alzwoclg jcxyg2ei tpvapw4o"><img class="gneimcpu b0w474w7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/80lDbyBfLdn.png" alt="" height="20" width="20"></div><div class="i85zmo3j alzwoclg jl2a5g8c cgu29s5g sl27f92c aeinzg81"><div class="alzwoclg cqf1kptm siwo0mpr gu5uzgus"><div class="jroqu855 nthtkgg5"><span class="gvxzyvdx aeinzg81 t7p7dqev gh25dzvf tb6i94ri gupuyl1y i2onq4tn b6ax4al1 gem102v4 ncib64c9 mrvwc6qr sx8pxkcf f597kf1v cpcgwwas f5mw3jnl hxfwr5lz k1z55t6l oog5qr5w tpi2lg9u pbevjfx6 ztn2w49o" dir="auto">Turn on notifications for this post</span></div></div></div><div class="o9erhkwx dzqi5evh hupbnkgi hvb2xoa8 z6erz7xo on4d8346 jkp44r48 l10tt5db s8sjc6am myo4itp8 ekq1a7f9 pym4i58u ldembo95 mwa1sm0y hi696u2r" data-visualcompletion="ignore" style="border-radius: 4px;"></div></div>'
const DASHBOARD_HEADER = '<div class="qi72231t nu7423ey n3hqoq4p r86q59rh b3qcqh3k fq87ekyn s5oniofx rn8ck1ys s3jn8y49 o9erhkwx dzqi5evh hupbnkgi hvb2xoa8 f14ij5to l3ldwz01 icdlwmnq qgrdou9d fsf7x5fv alzwoclg jl2a5g8c jez8cy9q sb3qexpo l7miuv0d m8h3af8h kjdc1dyq om3e55n1 cr00lzj9 g4tp4svg i85zmo3j q46jt4gp b0eko5f3 r5g9zsuq fwlpnqze" role="menuitem" tabindex="0"><div class="i85zmo3j lpqsk9lh alzwoclg jcxyg2ei tpvapw4o"><img class="gneimcpu b0w474w7" src="https://static.xx.fbcdn.net/rsrc.php/v3/yW/r/80lDbyBfLdn.png" alt="" height="20" width="20"></div><div class="i85zmo3j alzwoclg jl2a5g8c cgu29s5g sl27f92c aeinzg81"><div class="alzwoclg cqf1kptm siwo0mpr gu5uzgus"><div class="jroqu855 nthtkgg5"><span class="gvxzyvdx aeinzg81 t7p7dqev gh25dzvf tb6i94ri gupuyl1y i2onq4tn b6ax4al1 gem102v4 ncib64c9 mrvwc6qr sx8pxkcf f597kf1v cpcgwwas f5mw3jnl hxfwr5lz k1z55t6l oog5qr5w tpi2lg9u pbevjfx6 ztn2w49o" dir="auto">Turn on notifications for this post</span></div></div></div><div class="o9erhkwx dzqi5evh hupbnkgi hvb2xoa8 z6erz7xo on4d8346 jkp44r48 l10tt5db s8sjc6am myo4itp8 ekq1a7f9 pym4i58u ldembo95 mwa1sm0y hi696u2r" data-visualcompletion="ignore" style="border-radius: 4px;"></div></div>'

const HR_BREAK = '<hr class="th51lws0 p9ctufpz rj0o91l8 mfn553m3 tccefgj0">'
const DROPDOWN_SVG = '<svg fill=white style="display: inline-block; vertical-align: text-bottom; margin-right: 1rem;" viewBox="0 0 15.5 15.5" width="1.5rem" height="1.5rem" class="dropdown a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh jnigpg78 odw8uiq3"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>'
const AD_BUTTON_STYLE = 'width: 8rem; padding: 0.23rem 0.05rem 0.2rem 0.07rem; text-align: center; border-radius: 20px; text-decoration: none; display: inline-block; font-size: 0.89rem; cursor: pointer; border: 0.5px solid var(--blue-link); font-family: sans-serif;'
const HEADER_STYLE = 'padding: 0.6rem 0rem; font-size: 1.25rem; font-weight: 700; color: white; font-family: sans-serif;'   
// ICONS
const BUTTON_NODE = '<div aria-label="Close" class="dropdown_button oajrlxb2 gs1a9yip mtkw9kbi tlpljxtp qensuy8j ppp5ayq2 rq0escxv nhd2j8a9 mg4g778l pfnyh3mw p7hjln8o tgvbjcpo hpfvmrgz i1ao9s8h esuyzwwr f1sip0of du4w35lb n00je7tq arfg74bv qs9ysxi8 k77z8yql btwxx1t3 abiwlrkh p8dawk7l lzcic4wl dwo3fsh8 g5ia77u1 goun2846 ccm00jje s44p3ltw mk2mc5f4 rt8b4zig n8ej3o3l agehan2d sk4xxmp2 pq6dq46d kvgmc6g5 cxmmr5t8 oygrvhab hcukyx3x jb3vyjys rz4wbd8a qt6c0cv9 a8nywdso l9j0dhe7 pzggbiyp pkj7ub1o bqnlxs5p kkg9azqs c24pa1uk ln9iyx3p fe6kdd0r ar1oviwq l10q8mi9 sq40qgkc s8quxz6p pdjglbur" role="button" tabindex="0"></div>';
const BUTTON_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll m6k467ps" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/8VnyvQJM2fQ.png&quot;); background-position: 0px -444px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>';
const BUTTON_SUB_NODE = '<div class="i09qtzwb n7fi1qx3 b5wmifdl hzruof5a pmk7jnqg j9ispegn kr520xx4 c5ndavph art1omkt ot9fgl3s s45kfl79 emlxlaya bkmhp75w spb7xbtv" data-visualcompletion="ignore" style="bottom:-8px;left:-8px;right:-8px;top:-8px"></div>';

const DISCONNECT_ICON = '<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/4EPP2T0Rs5N.png&quot;); background-position: 0px -331px; background-size: 37px 352px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const INFORMATION_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/eCCDLUsDIXQ.png&quot;); background-position: 0px -300px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const ADVERTISERS_ICON = '<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/PqWPQ2GHYn6.png&quot;); background-position: 0px -747px; background-size: 25px 1572px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const AD_ICON = '<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/4E-JB4cntAF.png&quot;); background-position: 0px -273px; background-size: 21px 311px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
// const SETTINGS_ICON ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>'
const SETTINGS_ICON = '<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/yIxBtjx5FNB.png&quot;); background-position: -21px -579px; background-size: 73px 736px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'

const titles = [
                    "Stop using data from partners to personalize ads", 
                    "Review/disconnect your off-Facebook activity",
                    "Manage ad topics",
                    "Manage audience-based advertising",
                    "Ad settings"
                ]
const descriptions = [
                    "Decide if you want to see ads based on your activity on other businesses' websites/apps or offline.",
                    "Control how Facebook connects your activity on other businesses’ websites/apps to your account.",
                    "Choose ad topics you want to see less.",
                    "Review and restrict advertisers who have targeted you based on information uploaded about you (e.g., your email address or phone number) or your activity.",
                    ""
                    ]
const urls = [
            "https://www.facebook.com/adpreferences/?section=data_from_partners",
            "https://www.facebook.com/off_facebook_activity",
            "https://www.facebook.com/adpreferences/ad_topics",
            "https://www.facebook.com/adpreferences/?section=audience_based_advertising",
            "https://www.facebook.com/adpreferences/ad_settings"
            ]

const icons = [
                DISCONNECT_ICON, 
                DISCONNECT_ICON,
                AD_ICON,
                ADVERTISERS_ICON,
                SETTINGS_ICON
            ]

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
// NOTE: Needs to run in IFrames as well because some options pages are loaded as IFrames

// Activates page action since show_matches isn't supported...
// if (app.isChrome)
//     browser.runtime.sendMessage({chrome});

app.init().then(async () => {
    if (!app.options.enabled)
        return;

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
        choice.querySelector('img').parentElement.appendChild(icon)
        choice.querySelector('img').remove()

        parent.appendChild(choice)
        

        choice.addEventListener("click", e => window.open(url));

        choice.addEventListener("mouseover", e => choice.classList.add('hi696u2r'))
        choice.addEventListener("mouseout", e => choice.classList.remove('hi696u2r'))
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
            dashboard_node.classList.add("m8h3af8h", "pry8b2m5", "kjdc1dyq", "p8zq7ayg", "imjq5d63", "dm6rj7fv", "n7p8i11x", "ksav2qyx", "ovvwtbxn", "eqaaof95")
         
            // alzwoclg jl2a5g8c jcxyg2ei p8bdhjjv q46jt4gp
            var menu_frame = document.createElement("div");
            menu_frame.classList.add("dashboard", "alzwoclg", "jl2a5g8c", "jcxyg2ei", "p8bdhjjv");
            menu_frame.style.borderRadius = "border-radius:max(0px, min(8px, calc((100vw - 4px - 100%) * 9999))) / 8px";

            // alzwoclg om3e55n1 mfclru0v
            var menu_style = document.createElement("div");
            menu_style.classList.add("menu_style", "alzwoclg", "om3e55n1", "mfclru0v");
            
            //bdao358l om3e55n1 g4tp4svg oab4agdp g6da2mms yn3a2qjl b52o6v01 a96hb305 mfclru0v lq84ybu9 hf30pyar b3dzj11p
            var menu_bar_1 = document.createElement("div");
            menu_bar_1.classList.add("menu_bar_1", "bdao358l", "om3e55n1", "g4tp4svg", "oab4agdp", "g6da2mms", "yn3a2qjl", "b52o6v01", "a96hb305", "mfclru0v", "lq84ybu9", "hf30pyar", "b3dzj11p");
            menu_bar_1.setAttribute("role", "tablist");
            // menu_bar_1.style.backgroundColor = "#1877F2";
           
            //bdao358l om3e55n1 g4tp4svg alzwoclg jg3vgc78 cgu29s5g i15ihif8 aeinzg81 sl27f92c o9w3sbdw sr926ui1 jl2a5g8c nuznn79q snu7ymun g1smwn4j a05blw6y qjfq86k5 srn514ro oxkhqvkx rl78xhln nch0832m
            var menu_bar_2 = document.createElement("div");
            menu_bar_2.classList.add("menu_bar_2","bdao358l", "om3e55n1", "g4tp4svg", "alzwoclg", "jg3vgc78", "cgu29s5g", "i15ihif8", "aeinzg81", "sl27f92c", "o9w3sbdw", "sr926ui1", "jl2a5g8c", "nuznn79q", "snu7ymun", "g1smwn4j", "a05blw6y", "qjfq86k5", "srn514ro", "oxkhqvkx", "rl78xhln", "nch0832m");
           
            //bdao358l om3e55n1 g4tp4svg alzwoclg cqf1kptm gvxzyvdx aeinzg81 jg3vgc78 cgu29s5g i15ihif8 i5oewl5a nnzkd6d7 f9xcifuu rl78xhln
            var menu_bar_3 = document.createElement("div");
            menu_bar_3.classList.add("menu_bar_3", "bdao358l", "om3e55n1", "g4tp4svg", "alzwoclg", "cqf1kptm", "gvxzyvdx", "aeinzg81", "jg3vgc78", "cgu29s5g", "i15ihif8", "i5oewl5a", "nnzkd6d7", "f9xcifuu", "rl78xhln");
           
            //bdao358l om3e55n1 g4tp4svg alzwoclg jez8cy9q t5n4vrf6 o9w3sbdw sr926ui1 jl2a5g8c r227ecj6 gt60zsk1 ktovzxj4 g1smwn4j
            var menu_bar_4 = document.createElement("div");
            menu_bar_4.classList.add("menu_bar_4", "bdao358l", "om3e55n1", "g4tp4svg", "alzwoclg", "jez8cy9q", "t5n4vrf6", "o9w3sbdw", "sr926ui1", "jl2a5g8c", "r227ecj6", "gt60zsk1", "ktovzxj4", "g1smwn4j");
            menu_bar_4.setAttribute("aria-hidden", "false");
            menu_bar_4.setAttribute("aria-selected", "true");
            menu_bar_4.setAttribute("role", "tab");
            menu_bar_4.setAttribute("tabindex", "0");
          
            //bdao358l om3e55n1 g4tp4svg alzwoclg cqf1kptm jez8cy9q gvxzyvdx aeinzg81 bmgto6uh f9xcifuu cgu29s5g
            var menu_bar_5 = document.createElement("div");
            menu_bar_5.classList.add("menu_bar_5", "bdao358l", "om3e55n1", "g4tp4svg", "alzwoclg", "cqf1kptm", "jez8cy9q", "gvxzyvdx", "aeinzg81", "bmgto6uh", "f9xcifuu", "cgu29s5g");
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
            var intro_span = document.createElement("div");
            intro_span.classList.add("intro", "oog5qr5w", "d2edcug0", "hpfvmrgz", "qv66sw1b", "c1et5uql", "oi732d6d", "ik7dh3pa", "ht8s03o8", "a8c37x1j", "fe6kdd0r", "mau55g9w", "c8b282yb", "keod5gw0", "nxhoafnm", "aigsh9s9", "d9wwppkn", "iv3no6db", "jq4qci2q", "a3bd9o3v", "ekzkrbhg", "oo9gr5id", "hzawbc8m");
            const intro_text = "Control how Facebook uses your data and displays ads."
            intro_span.insertAdjacentText("afterbegin", intro_text);
            intro_span.style.color = "white";
            intro_frame_node.appendChild(intro_span);

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
            menu_bar_2.append(button_container);
            menu_bar_5.appendChild(intro_frame_node);

            // create static dashboard content
            var content_frame_1 = document.createElement("div");
            content_frame_1.classList.add("dashboardpanel", "bdao358l", "om3e55n1", "g4tp4svg", "alzwoclg", "jg3vgc78", "cgu29s5g", "i15ihif8", "aeinzg81", "sl27f92c", "o9w3sbdw", "sr926ui1", "jl2a5g8c", "nuznn79q", "snu7ymun", "g1smwn4j", "a05blw6y", "srn514ro", "oxkhqvkx", "rl78xhln", "nch0832m");
            content_frame_1.style.marginTop = "0.5rem";
            content_frame_1.style.paddingLeft = "0.3rem";
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

            //menu_bar_1.parentNode.insertBefore(content_frame_1, menu_bar_1.nextSibling);
            menu_bar_1.appendChild(content_frame_1);
            // collpase if need be
            chrome.storage.local.get(["collapsed"], function(result){
                if (result.collapsed=="true") {
                    content_frame_1.style.display = "none";
                } else {
                    content_frame_1.style.display = "block";
                    chrome.storage.local.set({"collapsed": "false"}, function(){});
                }
            });
            
            dashboard_node.addEventListener('click', function () {
                chrome.storage.local.get(["log_history"], function(result){
                    var clickEvent = {
                        "clicked_element_outer": "dashboard",
                        "timestamp": Date.now(), 
                    }
                    if (result.log_history) {
                        result.log_history.push(clickEvent)
                        chrome.storage.local.set({"log_history": result.log_history}, function(){console.log(result.log_history)});
                    }else{
                        chrome.storage.local.set({"log_history": [clickEvent]}, function(){console.log(result.log_history)});
                    }
                });
            })
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
        var panel = document.getElementsByClassName("dashboardpanel")[0]
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



    function findClosestElementWithText(e) {
        const outliers = ["View", "Edit", "Close", "Use Activity Log", "Limit Past Posts", "Turn off", "Hide Ads", "Undo", "See more"]
        if ((e.innerText === '') || (outliers.includes(e.innerText)) || (e.innerText === null) || (e.innerText === undefined)) {
            if (e.parentElement) {
                return findClosestElementWithText(e.parentElement)
            } else {
                return 'none'
            }
        } else {
            // console.log("---inner text---")
            // console.log(e.innerText)
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
            // console.log("---aria label---")
            // console.log(e.ariaLabel)
            return e
        }
    }

    function findClosestElementWithAriaLabelChild(e) {
        // console.log(e.querySelector('[aria-label]'))
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
            // console.log("---aria checked---")
            // console.log(e.ariaChecked)
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
            // console.log("---role---")
            // console.log(e.role)
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
            // console.log(popupType);
            if(popupType) {
                // console.log(popupType.innerText)
                chrome.storage.local.get(["prolific_ID"], function(p){
                    if (p.prolific_ID) {
                        chrome.storage.local.get(["popup_history"], function(r){
                            var popupEvent = [popupType.innerText, Date.now()]
                            if (r.popup_history) {
                                r.popup_history.push(popupEvent)
                                chrome.storage.local.set({"popup_history": r.popup_history}, function(){
                                    // console.log(r.popup_history)
                                });
                            }else{
                                chrome.storage.local.set({"popup_history": [popupEvent]}, function(){
                                    // console.log(r.popup_history)
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
            
                    createDashboard();
                    refreshHome();
                    logPopupInData();
                    
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
