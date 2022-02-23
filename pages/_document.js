import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {

   return (
      <Html lang={ 'ru' }>
         <Head>
            <title>NextJS</title>
            <link rel="icon" href="/favicon.ico"/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-23688716-34"/>
         </Head>
         <body>
         <Main/>
         <NextScript/>
         </body>
      </Html>
   )
}