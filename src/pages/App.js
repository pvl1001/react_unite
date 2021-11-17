import React from 'react'
import Header from "../components/Header/Header";
import Nav from "../components/Nav/Nav";
import Tariffs from "../components/Tariffs/Tariffs";
import Footer from "../components/Footer/Footer";


export default function App() {
   return (
      <>
         <Nav/>
         <Header/>
         <main>
            <Tariffs/>

         </main>
         <Footer/>
      </>
   )
}