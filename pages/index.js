import Head from 'next/head';
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import WhatElse from "../components/WhatElse/WhatElse";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import headerStyle from '../components/Header/Header.module.sass';
import getLocation from "../mixins/getLocation";
import Nav from "../components/Nav/Nav";


export default function IndexPage( { location } ) {
   return (
      <>
         <Head>
            <title>NextJS !Объединяй</title>
         </Head>

         <Nav location={ location }/>
         <Header style={ headerStyle }/>
         <main>
            <Tariffs/>
            <CheckAddress/>
            <Equipments/>
            <WhatElse/>
            <AppBanner/>
            <FAQ/>
         </main>
      </>
   )
}


export const getStaticProps = async () => {
   const location = await getLocation()
   console.log( location.data.region )

   return { props: { location } }
}
