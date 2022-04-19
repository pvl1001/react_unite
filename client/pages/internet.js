import Head from 'next/head'
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import pageHome, { tariffsPageHome } from '../pageData/internet'
import headerStyle from "../components/Header/HeaderHome.module.sass";
import { setInitialStateTariffs } from "../redux/slices/tariffsSlice";
import { wrapper } from "../redux/store";
import { setInitialStatePage } from "../redux/slices/pageSlice";
import Nav from "../components/Nav/Nav";
import getRegion from "../mixins/getRegion";
import { useSelector } from "react-redux";
import React, { useState } from "react";
import NewCard from "../components/Tariffs/NewCard/NewCard";
import { SwiperSlide } from "swiper/react";


export default function InternetPage( { region } ) {

   const tariffs = useSelector( state => state.tariffs )
   const premium = tariffs.find( el => el.id === 'premium' )
   const [ collapseGroup, setCollapseGroup ] = useState( false )
   const [ collapseChannels, setCollapseChannels ] = useState( [] )


   return (
      <>
         <Head>
            <title>NextJS #ДляДома</title>
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
            <AppBanner/>
            <FAQ/>
         </main>
      </>
   )
}


export const getStaticProps = wrapper.getStaticProps( store => async () => {
   const region = await getRegion()
   // console.log( location.value )

   store.dispatch( setInitialStatePage( pageHome ) )
   store.dispatch( setInitialStateTariffs( tariffsPageHome ) )
   return { props: { region } }
} )
