import Head from 'next/head'
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import { tariffsPageHome } from '/data/pageHome'
import pageHome from '/data/pageHome';
import headerStyle from "../components/Header/HeaderHome.module.sass";
import { setInitialStateTariffs } from "../redux/slices/tariffsSlice";
import { wrapper } from "../redux/store";
import { setInitialStatePage } from "../redux/slices/pageSlice";


export default function InternetPage() {

   return (
      <>
         <Head>
            <title>NextJS #ДляДома</title>
         </Head>

         <Header style={ headerStyle }/>
         <main>
            <Tariffs/>
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
