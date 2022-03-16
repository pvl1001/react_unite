import Head from 'next/head';
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import WhatElse from "../components/WhatElse/WhatElse";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import headerStyle from '../components/Header/Header.module.sass';


export default function IndexPage() {

   return (
      <>
         <Head>
            <title>NextJS !Объединяй</title>
         </Head>

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
