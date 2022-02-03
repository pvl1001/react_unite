import Script from 'next/script'
import React from "react";

function Analytics() {

   return (
      <>
         <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
               __html: `
                  window.dataLayer = window.dataLayer || [];

                  function gtag() {
                     window.dataLayer.push(arguments);
                  }
            
                  gtag('js', new Date());
                  gtag('config', 'UA-23688716-34', {
                     'custom_map': {
                        'dimension1': 'inh',
                        'dimension2': 'clientId'
                     }
                  });
            `
            }}
         />

         <Script dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l] = w[l] || [];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-MS5JPJK');`
         }}/>


         <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MS5JPJK"
                    height="0" width="0"
                    style={{display: 'none', visibility: 'hidden'}}
            />
         </noscript>


         <Script
            type="text/javascript"
            dangerouslySetInnerHTML={{
               __html: `
                  (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                  ym(57533086, "init", {
                      clickmap:true,
                      trackLinks:true,
                      accurateTrackBounce:true,
                      webvisor:true,
                      ecommerce:"dataLayer"
                  })`
            }}
         />

         <noscript>
            <div>
               <img
                  src="https://mc.yandex.ru/watch/57533086"
                  style={{position: 'absolute', left: '-9999px'}}
                  alt=""
               />
            </div>
         </noscript>


         <Script
            type="text/javascript"
            dangerouslySetInnerHTML={{
               __html: `
                  (function (m, e, t, r, i, k, a){m[i] = m[i] || function () {
                     (m[i].a = m[i].a || []).push(arguments)
                  };
                  m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
                  (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
                  ym(66149989, "init", {
                     clickmap:true,
                     trackLinks:true,
                     accurateTrackBounce:true,
                     webvisor:true,
                     ecommerce:"dataLayer"
                  });`
            }}
         />


         <noscript>
            <div>
               <img
                  src="https://mc.yandex.ru/watch/66149989"
                  style={{position: 'absolute', left: '-9999px'}}
                  alt=""
               />
            </div>
         </noscript>

         <Script type="text/javascript"
                 dangerouslySetInnerHTML={{
                    __html: `(function (w, d, n, c){w.CalltouchDataObject = n;w[n]=function(){w[n]["callbacks"].push(arguments)};if(!w[n]["callbacks"]){w[n]["callbacks"]=[]}w[n]["loaded"]=false;if(typeof c!=="object"){c=[c]}w[n]["counters"]=c;for(var i=0;i<c.length;i+=1){p(c[i])}function p(cId){var a=d.getElementsByTagName("script")[0],s=d.createElement("script"),i=function(){a.parentNode.insertBefore(s,a)};s.type="text/javascript";s.async=true;s.src="https://mod.calltouch.ru/init.js?id="+cId;if(w.opera=="[object Opera]"){d.addEventListener("DOMContentLoaded",i,false)}else{i()}}})(window, document, "ct", "g96m2c8n");`
                 }}
         />
      </>
   )
}

export default Analytics