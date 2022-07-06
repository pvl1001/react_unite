import 'bootstrap/dist/css/bootstrap.min.css'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/light.css'
import "swiper/css"
import "swiper/css/pagination"
import 'swiper/css/navigation'

import '../public/fonts/fonts.css'
import '../public/styles/null.sass'
import '../public/styles/colors.css'
import '../public/styles/main.sass'


import Head from 'next/head';
import { wrapper } from '../redux/store';
import Layout from "../components/Layout";
import Analytics from "../analytics/Analytics";
import HeadAnalytics from "../analytics/HeadAnalytics";


function App( { Component, pageProps } ) {

   return (
      <>
         <Head>
            <title>NextJS</title>
            <link rel="icon" href="/favicon.ico"/>
            <HeadAnalytics/>
         </Head>
         <Layout>
            <Component { ...pageProps }/>
         </Layout>
         <Analytics/>
      </>
   )
}

export default wrapper.withRedux( App )