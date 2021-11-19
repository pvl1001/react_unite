import React from 'react'
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Tariffs from "../components/Tariffs/Tariffs";
import Footer from "../components/Footer/Footer";
import FAQ from "../components/FAQ/FAQ";
import AppBanner from "../components/AppBanner/AppBanner";
import WhatElse from "../components/WhatElse/WhatElse";


export default function App() {
   return (
      <>
         <Nav/>
         <Header/>
         <main>
            <Tariffs/>
            <WhatElse/>
            <AppBanner/>
            <FAQ/>
         </main>
         <Footer/>
      </>
   )
}