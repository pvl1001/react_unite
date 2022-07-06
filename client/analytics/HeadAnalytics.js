import React, { memo } from 'react';
import Script from "next/script";

function HeadAnalytics() {
   return (
      <>
         {/* Andata */ }
         <Script
            type="application/javascript"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={ {
               __html: `
                  (function ( a, n, da, ta ) {
                     a.andataVersion = '1.0';
                     a.andataHost = n;
                     var p = '//';
                     n += '/i/_auto/';
                     var s = '/dp.js';
                     var js = document.createElement( ta );
                     js.charset = "UTF-8";
                     js.async = 1;
                     js.src = p + n + da + s;
                     var js2 = document.getElementsByTagName( ta )[0];
                     js2.parentNode.insertBefore( js, js2 );
                  })( window, 'mdeploy.andata.ru', 'megafon_cuqis', 'script' );
            `
            } }
         />
         {/* /Andata */ }
         {/* Advcake */ }
         <Script
            id="advcakeAsync"
            type="text/javascript"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={ {
               __html: `
                   (function ( a ) {
                      var b = a.createElement( "script" );
                      b.async = 1;
                      b.src = "//code.cake001.ru/";
                      a = a.getElementsByTagName( "script" )[0];
                      a.parentNode.insertBefore( b, a )
                   })( document );
            `
            } }
         />
         {/* /Advcake */ }
         <Script
            strategy="afterInteractive"
            dangerouslySetInnerHTML={ {
               __html: `
                     window.advcake_data = window.advcake_data || [];
                     window.advcake_data.push( { pageType: 1, } );
                  `
            } }
         />
      </>
   );
}

export default memo( HeadAnalytics )