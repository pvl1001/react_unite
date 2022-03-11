import Support from "../components/Support/Support";
import Nav from "../components/Nav/Nav";
import Header from "../components/Header/Header";
import headerStyle from "../components/Header/HeaderHome.module.sass";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import ModalCity from "../components/modals/City/ModalCity";
import ModalOrder from "../components/modals/Order/ModalOrder";
import ModalTariff from "../components/modals/Tariff/ModalTariff";
import ModalMftv from "../components/modals/Mftv/ModalMftv";
import ModalTariffAll from "../components/modals/TariffAll/ModalTariffAll";
import ModalAlmond from "../components/modals/Almond/ModalAlmond";
import ModalAboutAlmond from "../components/modals/AboutAlmond/ModalAboutAlmond";
import ChoiceRouter from "../components/modals/ChoiceRouter/ChoiceRouter";
import ModalEquipment from "../components/modals/Equipment/ModalEquipment";
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

         <Support/>
         <Nav/>
         <Header style={ headerStyle }/>
         <main>
            <ForHomeAll/>
            <CheckAddress/>
            <Equipments/>
            <AppBanner/>
            <FAQ/>
         </main>
         <Footer/>

         <ModalCity/>
         <ModalOrder/>
         <ModalTariff/>
         <ModalMftv/>
         <ModalTariffAll/>
         <ModalAlmond/>
         <ModalAboutAlmond/>
         <ChoiceRouter/>
         <ModalEquipment/>
      </>

   )
}

export const getServerSideProps = wrapper.getServerSideProps( store => async () => {
   await store.dispatch( setInitialStatePage( pageHome ) )
   await store.dispatch( setInitialStateTariffs( tariffsPageHome ) )
   return { props: {} }
} )