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
const HR_BREAK = '<hr class="th51lws0 p9ctufpz rj0o91l8 mfn553m3 tccefgj0">'
const DROPDOWN_SVG = '<svg fill="white" viewBox="-1 -3.4 16 16" width="1em" height="1em" class="dropdown style="vertical-align: middle; margin-bottom: 0.27rem; display: inline-block;"><g fill-rule="evenodd" transform="translate(-448 -544)"><path fill-rule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>'
const AD_BUTTON_STYLE = 'width: 8rem; padding: 0.23rem 0.05rem 0.2rem 0.07rem; text-align: center; border-radius: 20px; text-decoration: none; display: inline-block; font-size: 0.89rem; cursor: pointer; color: white; background-color: rgb(24, 119, 242); border: 0.5px solid var(--blue-link); font-family: sans-serif;'
const HEADER_STYLE = 'margin: 10px 0px; padding: 5px 12px; font-size: 1.1rem; font-weight: 550; color:#1877F2; font-family: sans-serif; background-color: var(--comment-background);'      
// ICONS
const DISCONNECT_ICON = '<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yt/r/4EPP2T0Rs5N.png&quot;); background-position: 0px -331px; background-size: 37px 352px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const INFORMATION_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/eCCDLUsDIXQ.png&quot;); background-position: 0px -300px; background-size: auto; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const ADVERTISERS_ICON = '<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/PqWPQ2GHYn6.png&quot;); background-position: 0px -747px; background-size: 25px 1572px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const AD_ICON = '<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yP/r/4E-JB4cntAF.png&quot;); background-position: 0px -273px; background-size: 21px 311px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
// const SETTINGS_ICON ='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>'
const SETTINGS_ICON = '<i data-visualcompletion="css-img" class="gneimcpu b0w474w7" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yc/r/yIxBtjx5FNB.png&quot;); background-position: -21px -579px; background-size: 73px 736px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>'
const BTN_SETTINGS_ICON = '<img class="hu5pjgll" style="vertical-align: middle; margin-right: 0.13rem; margin-bottom: 0.07rem;" height="80%" width="14%" src="https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/wIxncaU7_F8.png" alt="">'
// const BTN_SETTINGS_ICON ='<svg xmlns="http://www.w3.org/2000/svg" class="settingsBtn" viewBox="0 0 512 512" width="0.85rem" height="0.85rem" style="vertical-align: middle; margin-left: 0.12rem; margin-right: 0.17rem; fill: var(--secondary-button-text);"><!--! Font Awesome Pro 6.1.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M495.9 166.6C499.2 175.2 496.4 184.9 489.6 191.2L446.3 230.6C447.4 238.9 448 247.4 448 256C448 264.6 447.4 273.1 446.3 281.4L489.6 320.8C496.4 327.1 499.2 336.8 495.9 345.4C491.5 357.3 486.2 368.8 480.2 379.7L475.5 387.8C468.9 398.8 461.5 409.2 453.4 419.1C447.4 426.2 437.7 428.7 428.9 425.9L373.2 408.1C359.8 418.4 344.1 427 329.2 433.6L316.7 490.7C314.7 499.7 307.7 506.1 298.5 508.5C284.7 510.8 270.5 512 255.1 512C241.5 512 227.3 510.8 213.5 508.5C204.3 506.1 197.3 499.7 195.3 490.7L182.8 433.6C167 427 152.2 418.4 138.8 408.1L83.14 425.9C74.3 428.7 64.55 426.2 58.63 419.1C50.52 409.2 43.12 398.8 36.52 387.8L31.84 379.7C25.77 368.8 20.49 357.3 16.06 345.4C12.82 336.8 15.55 327.1 22.41 320.8L65.67 281.4C64.57 273.1 64 264.6 64 256C64 247.4 64.57 238.9 65.67 230.6L22.41 191.2C15.55 184.9 12.82 175.3 16.06 166.6C20.49 154.7 25.78 143.2 31.84 132.3L36.51 124.2C43.12 113.2 50.52 102.8 58.63 92.95C64.55 85.8 74.3 83.32 83.14 86.14L138.8 103.9C152.2 93.56 167 84.96 182.8 78.43L195.3 21.33C197.3 12.25 204.3 5.04 213.5 3.51C227.3 1.201 241.5 0 256 0C270.5 0 284.7 1.201 298.5 3.51C307.7 5.04 314.7 12.25 316.7 21.33L329.2 78.43C344.1 84.96 359.8 93.56 373.2 103.9L428.9 86.14C437.7 83.32 447.4 85.8 453.4 92.95C461.5 102.8 468.9 113.2 475.5 124.2L480.2 132.3C486.2 143.2 491.5 154.7 495.9 166.6V166.6zM256 336C300.2 336 336 300.2 336 255.1C336 211.8 300.2 175.1 256 175.1C211.8 175.1 176 211.8 176 255.1C176 300.2 211.8 336 256 336z"/></svg>'
                  
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

const BATCH_SIZE = 10;
const QUERY_STRING_FOR_LAYOUT = ".qmqpeqxj.e7u6y3za.qwcclf47.nmlomj2f.s8sjc6am.j7qd3pol";
const TOPBAR = ".l38y3qj3.ekq1a7f9.khm9p5p9.lcfup58g.r227ecj6.on4d8346";
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

    if (location.href==FB_URL) {
        var topBar = document.querySelector(TOPBAR);

        var dropdownExist = topBar.querySelector(QUERY_STRING_FOR_LAYOUT);
        var sideAdExist = document.getElementsByClassName(SIDE_AD).length > 0;
        var layout = ""
        chrome.storage.local.get(["layout_type"], function(l){
            if(l.layout_type=="" || l.layout_type==null) {
                if(dropdownExist){
                    if(sideAdExist) {
                        layout = "dropdown_icon / side_ad"
                    }else {
                         layout = "dropdown_icon / no_side_ad"
                    }
                }else{
                    if(sideAdExist) {
                        layout = "no_dropdown_icon / side_ad"
                    }else {
                         layout = "no_dropdown_icon / no_side_ad"
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
        augmentButton(elem) // our code for augmenting button on ads
        // var ad_content = elem.closest(app.hide_rules.article_wrapper)
        // var sponsor = ad_content.querySelector(".oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.rq0escxv.nhd2j8a9.nc684nl6.p7hjln8o.kvgmc6g5.cxmmr5t8.oygrvhab.hcukyx3x.jb3vyjys.rz4wbd8a.qt6c0cv9.a8nywdso.i1ao9s8h.esuyzwwr.f1sip0of.lzcic4wl.gpro0wi8.oo9gr5id.lrazzd5p")
        // console.log(sponsor.querySelector('span').innerHTML)
        let target;
        if (!elem || !(target = elem.closest(app.hide_rules.article_wrapper)))
            return false;

        return true;
    }

/////////////////////////// BEGIN OUR CODE ///////////////////////////
    function augmentButton(elem) {
        var header = elem.parentElement.closest('.hael596l.alzwoclg.jl2a5g8c.qjfq86k5.r227ecj6.gt60zsk1.s1m0hq7j')

        if (header){
            var adBtn = header.querySelector('[aria-label="Actions for this post"]')

            if (adBtn){
                var three_dot_svg = adBtn.querySelector('svg')
                if(three_dot_svg && !three_dot_svg.classList.contains("dropdown") && !three_dot_svg.classList.contains("settingsBtn")){
                
                    three_dot_svg.remove()

                    var settingsBtn = document.createElement('div');

                    //settingsBtn.innerHTML = DROPDOWN_SVG + "<span>ad settings</span>"
                    // const BTN_SETTINGS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: ur(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/bcLkvwxZS8v.png&quot;); background-position: 0px -270px; magin-left: 10px; background-size: auto; width: 12px; height: 12px; background-repeat: no-repeat; display: inline-block;"></i>'
                    settingsBtn.innerHTML = BTN_SETTINGS_ICON + '<strong><span style="padding-right: 0.1rem">ad settings</span></strong>' + DROPDOWN_SVG
                    settingsBtn.style = AD_BUTTON_STYLE

                    adBtn.insertBefore(settingsBtn, adBtn.firstChild);
                    adBtn.parentElement.parentElement.style.width = "8.2rem";

                    adBtn.addEventListener("click", function() {
                        changeMenu();

                        chrome.storage.local.get(["log_history"], function(result){
                            var clickEvent = {
                                "clicked_element": "ad-button",
                                "timestamp": Date.now(), 
                            }
                            if (result.log_history) {
                                result.log_history.push(clickEvent)
                                chrome.storage.local.set({"log_history": result.log_history}, function(){console.log(result.log_history)});
                            }else{
                                chrome.storage.local.set({"log_history": [clickEvent]}, function(){console.log(result.log_history)});
                            }
                        });
                    });
                }
            }
        }
        
    }

    function augmentButtonSide() {
        // var sideAds = document.getElementsByClassName('alzwoclg n3hqoq4p r86q59rh b3qcqh3k fq87ekyn p5mefues j32recxq j94dm2s7 trbvugp6 fsf7x5fv no6h3tfh m8h3af8h h07fizzr kjdc1dyq jbg88c62 ztn2w49o q46jt4gp b0eko5f3 r5g9zsuq fwlpnqze ie32ypzk him0ws1g')
        var sideAds = document.querySelectorAll('.i85zmo3j.z6erz7xo.alzwoclg.h28iztb5.s8sjc6am.ekq1a7f9')
        for(let i=0; i<sideAds.length; i++) {
            var header = sideAds[i];
            if (header){
                var adBtn = header.querySelector('[aria-label="More"]')
                if (adBtn){
                    var three_dot_svg = adBtn.querySelector('svg')
                    if(three_dot_svg && !three_dot_svg.classList.contains("dropdown") && !three_dot_svg.classList.contains("settingsBtn")){
                        three_dot_svg.remove()

                        var settingsBtn = document.createElement('div');

                        //settingsBtn.innerHTML = DROPDOWN_SVG + "<span>ad settings</span>"
                        // const BTN_SETTINGS_ICON = '<i data-visualcompletion="css-img" class="hu5pjgll lzf7d6o1" style="background-image: ur(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yn/r/bcLkvwxZS8v.png&quot;); background-position: 0px -270px; magin-left: 10px; background-size: auto; width: 12px; height: 12px; background-repeat: no-repeat; display: inline-block;"></i>'
                        settingsBtn.innerHTML = BTN_SETTINGS_ICON + '<strong><span style="padding-right: 0.1rem">ad settings</span></strong>' + DROPDOWN_SVG
                        settingsBtn.style = AD_BUTTON_STYLE

                        adBtn.insertBefore(settingsBtn, adBtn.firstChild);
                        adBtn.style.width = "8.2rem";
                        adBtn.style.height = "1.8rem";

                        adBtn.addEventListener("click", function() {
                            changeMenu();

                            chrome.storage.local.get(["log_history"], function(result){
                                var clickEvent = {
                                    "clicked_element": "ad-button",
                                    "timestamp": Date.now(), 
                                }
                                if (result.log_history) {
                                    result.log_history.push(clickEvent)
                                    chrome.storage.local.set({"log_history": result.log_history}, function(){console.log(result.log_history)});
                                }else{
                                    chrome.storage.local.set({"log_history": [clickEvent]}, function(){console.log(result.log_history)});
                                }
                            });
                        });
                    }
                }
            }
        }
    }

    function changeMenu() {
        if(document.querySelector(".buh8m867.esf8hl5h.s8sjc6am.ekq1a7f9")){
            // var menu = document.querySelector(".j34wkznp.qp9yad78.pmk7jnqg.kr520xx4")
            // var menu_nodes = menu.querySelectorAll('.oajrlxb2.g5ia77u1.qu0x051f.esr5mh6w.e9989ue4.r7d6kgcz.p7hjln8o.esuyzwwr.f1sip0of.n00je7tq.arfg74bv.qs9ysxi8.k77z8yql.abiwlrkh.p8dawk7l.lzcic4wl.dwo3fsh8.rq0escxv.nhd2j8a9.j83agx80.btwxx1t3.pfnyh3mw.opuu4ng7.kj2yoqh6.kvgmc6g5.oygrvhab.l9j0dhe7.i1ao9s8h.du4w35lb.bp9cbjyn.cxgpxx05.dflh9lhu.sj5x9vvc.scb9dxdr')

            var menu_item_selector = '.qi72231t.nu7423ey.n3hqoq4p.r86q59rh.b3qcqh3k.fq87ekyn.s5oniofx.rn8ck1ys.s3jn8y49.o9erhkwx.dzqi5evh.hupbnkgi.hvb2xoa8.f14ij5to.l3ldwz01.icdlwmnq.qgrdou9d.bdao358l.fsf7x5fv.alzwoclg.jl2a5g8c.jez8cy9q.sb3qexpo.l7miuv0d.m8h3af8h.kjdc1dyq.om3e55n1.cr00lzj9.g4tp4svg.i85zmo3j.q46jt4gp.b0eko5f3.r5g9zsuq.fwlpnqze'
            waitForElm(menu_item_selector).then((menu_elms) => {

                //widen the menu
                var innerdiv_string = '.r7ybg2qv.qbc87b33.jk4gexc9.lq84ybu9.g4tp4svg.ly56v2vv.h67akvdo.ir1gxh3s.sqler345.by1hb0a5.id4k59z1.jfw19y2w.om3e55n1.b95sz57d.mm05nxu8.izce65as.o9w3sbdw.bdao358l.alzwoclg.cqf1kptm.oxkhqvkx.nch0832m.pkvztr2i.nksnnlf1.d0exdbj5'
                waitForElm(innerdiv_string).then((inner_elm) => { 
                    if(document.getElementsByClassName('FBTR-Menu').length == 0) {
                        inner_elm[0].style.width = '550px';

                        var nodes = menu_elms
                        var parent_node = nodes[0].parentElement
                        
                        var this_ad_header = document.createElement('div')
                        this_ad_header.className += 'FBTR-Menu';
                        this_ad_header.innerHTML = MENU_OPTION_NODE_WITH_DESC
                        this_ad_header.textContent = "For this ad"
                        this_ad_header.style = HEADER_STYLE;
                        parent_node.insertBefore(this_ad_header, nodes[0])

                        var hr = document.createElement('div');
                        // hr.innerHTML = HR_BREAK
                        parent_node.appendChild(hr)
                        
                        var general_header = document.createElement('div')
                        general_header.innerHTML = MENU_OPTION_NODE_WITHOUT_DESC
                        general_header.textContent = "For all ads"
                        general_header.style = HEADER_STYLE;

                        parent_node.appendChild(general_header)


                        // add links to privacy controls
                        for (let i = 0; i < titles.length; i++) { 
                            appendAdSettingOption(parent_node, titles[i], descriptions[i], urls[i], icons[i], i)
                            var scrollbar_string = '.rq0escxv.mkhogb32.n7fi1qx3.b5wmifdl.jb3vyjys.ph5uu5jm.qt6c0cv9.b3onmgus.hzruof5a.pmk7jnqg.kr520xx4.enuw37q7.dpja2al7.art1omkt.nw2je8n7.hhz5lgdu'
                            var bar_elm = inner_elm[0].querySelector(scrollbar_string)
                            if(bar_elm){
                                bar_elm.classList=[]
                                bar_elm.classList.add("rq0escxv","mkhogb32","n7fi1qx3","jb3vyjys","ph5uu5jm","qt6c0cv9","b3onmgus","hzruof5a","pmk7jnqg","kr520xx4","enuw37q7","art1omkt", "nw2je8n7","hhz5lgdu","pedkr2u6","z1801hqc")
                            }
                        }
                    }   

                    var scrollbar_string = '.bdao358l.plzdoh0l.on4d8346.jkp44r48.srn514ro.fzd7ma4j.rl78xhln.lcfup58g.l10tt5db.s8sjc6am.ekq1a7f9.o39suzbt.rbhpv5i9.ldembo95.cxnlz5q7.akh3l2rg'
                    var bar_elm = inner_elm[0].querySelector(scrollbar_string)
                    if(bar_elm){
                        bar_elm.classList=[]
                        bar_elm.classList.add("bdao358l", "plzdoh0l", "on4d8346", "srn514ro", "fzd7ma4j", "rl78xhln", "lcfup58g", "l10tt5db", "s8sjc6am", "ekq1a7f9", "o39suzbt", "ldembo95", "cxnlz5q7", "akh3l2rg", "cdum9rwi", "rfsmgd9j")
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
        choice.querySelector('img').parentElement.appendChild(icon)
        choice.querySelector('img').remove()

        parent.appendChild(choice)
        

        choice.addEventListener("click", e => window.open(url));

        choice.addEventListener("mouseover", e => choice.classList.add('hi696u2r'))
        choice.addEventListener("mouseout", e => choice.classList.remove('hi696u2r'))
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
            // console.log(popupType);
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
                                // console.log('periodic submit')
                                // browser.runtime.sendMessage("PERIODIC_SUBMIT");
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
                    augmentButtonSide();
                    reloadPopup();
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
