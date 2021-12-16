import React, {createContext, useState} from 'react'
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
import ModalOrder from "../components/modals/ModalOrder/ModalOrder";
import ModalCity from "../components/modals/ModalCity/ModalCity";
import ModalMftv from "../components/modals/ModalMftv/ModalMftv";
import ModalEquipment from "../components/modals/ModalEquipment/ModalEquipment";
import ModalTariff from "../components/modals/ModalTariff/ModalTariff";
import ModalTariffAll from "../components/modals/ModalTariffAll/ModalTariffAll";

export default function App() {

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
      </>
   )
}