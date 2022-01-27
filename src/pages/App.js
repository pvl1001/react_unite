import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Tariffs from "../components/Tariffs/Tariffs";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
import AppBanner from "../components/AppBanner/AppBanner";
import WhatElse from "../components/WhatElse/WhatElse";
import Support from "../components/Support/Support";
import Equipments from "../components/Equipments/Equipments";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import ModalOrder from "../components/modals/Order/ModalOrder";
import ModalCity from "../components/modals/City/ModalCity";
import ModalMftv from "../components/modals/Mftv/ModalMftv";
import ModalEquipment from "../components/modals/Equipment/ModalEquipment";
import ModalTariff from "../components/modals/Tariff/ModalTariff";
import ModalTariffAll from "../components/modals/TariffAll/ModalTariffAll";
import ModalAlmond from "../components/modals/Almond/ModalAlmond";
import ModalAboutAlmond from "../components/modals/AboutAlmond/ModalAboutAlmond";
import ChoiceRouter from "../components/modals/ChoiceRouter/ChoiceRouter";
import '../analytics'
import {useEffect} from "react";
import {analyticsView} from '../analytics'

export default function App() {

   useEffect(() => {
      analyticsView()
   })


   return (
      <>
         <Support/>
         <Nav/>
         <Header/>
         <main>
            <Tariffs/>
            <CheckAddress/>
            <Equipments/>
            <WhatElse/>
            <AppBanner/>
            <FAQ/>
         </main>
         <Footer/>

         <ModalEquipment/>
         <ModalCity/>
         <ModalOrder/>
         <ModalMftv/>
         <ModalTariff/>
         <ModalTariffAll/>
         <ModalAlmond/>
         <ModalAboutAlmond/>
         <ChoiceRouter/>
      </>
   )
}