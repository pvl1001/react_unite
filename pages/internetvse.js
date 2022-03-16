import Header from "../components/Header/Header";
import headerStyle from "../components/Header/HeaderHome.module.sass";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import Head from 'next/head'
import { setInitialStatePage } from "../redux/slices/pageSlice";
import pageHome, { tariffsPageHome } from "../data/pageHome";
import { wrapper } from "../redux/store";
import ForHomeAll from "../components/ForHomeAll/ForHomeAll";
import { setInitialStateTariffs } from "../redux/slices/tariffsSlice";


export default function InternetVsePage() {
   return (
      <>
         <Head>
            <title>NextJS #ДляДома Всё</title>
         </Head>

         <Header style={ headerStyle }/>
         <main>
            <ForHomeAll/>
            <CheckAddress/>
            <Equipments/>
            <AppBanner/>
            <FAQ/>
         </main>
      </>
   )
}


export const getServerSideProps = wrapper.getServerSideProps( store => async () => {
   await store.dispatch( setInitialStatePage( pageHome ) )
   await store.dispatch( setInitialStateTariffs( tariffsPageHome ) )
   return { props: {} }
} )