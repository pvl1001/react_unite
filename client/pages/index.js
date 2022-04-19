import Head from 'next/head';
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import WhatElse from "../components/WhatElse/WhatElse";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import headerStyle from '../components/Header/Header.module.sass';
import getRegion from "../mixins/getRegion";
import Nav from "../components/Nav/Nav";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewCard from "../components/Tariffs/NewCard/NewCard";
import { SwiperSlide } from "swiper/react";


export default function IndexPage( { region } ) {
   console.log( region )

   const tariffs = useSelector( state => state.tariffs )
   const premium = tariffs.find( el => el.id === 'premium' )
   const [ collapseGroup, setCollapseGroup ] = useState( false )
   const [ collapseChannels, setCollapseChannels ] = useState( [] )

   return (
      <>
         <Head>
            <title>NextJS !Объединяй</title>
         </Head>

         <Nav region={ region }/>
         <Header style={ headerStyle }/>
         <main>
            <Tariffs>
               { tariffs.map( tariff =>
                  <SwiperSlide key={ tariff.id }>
                     <NewCard
                        key={ tariff.id }
                        tariff={ tariff }
                        tariffs={ tariffs }
                        premium={ premium }
                        collapse={ {
                           collapseGroup,
                           setCollapseGroup,
                           collapseChannels,
                           setCollapseChannels
                        } }
                     />
                  </SwiperSlide>
               ) }
            </Tariffs>
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
   const region = await getRegion()
   console.log( region )

   return { props: { region } }
}
