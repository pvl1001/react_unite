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

export const Context = createContext()

export default function App() {
   const [cxt, setState] = useState( {
      showModalOrder: false
   } )

   return (
      <Context.Provider value={{cxt, setState}}>
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

         <ModalOrder/>
      </Context.Provider>
   )
}