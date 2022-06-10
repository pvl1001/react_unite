import Head from 'next/head';
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import headerStyle from '../components/Header/Header.module.sass';
import Nav from "../components/Nav/Nav";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewCard from "../components/Tariffs/NewCard/NewCard";
import { SwiperSlide } from "swiper/react";
import { wrapper } from "../redux/store";
import axios from "axios";
import { setInitialStateTariffs } from "../redux/slices/tariffsSlice";


export default function IndexPage() {

   const tariffs = useSelector( state => {
      const { internet, dvainet, hit, their, vse, turbo, econom, films, maximum, premium } = state.tariffs
      return { internet, dvainet, hit, their, vse, turbo, econom, films, maximum, premium }
   } )
   const [ collapseGroup, setCollapseGroup ] = useState( false )
   const [ collapseChannels, setCollapseChannels ] = useState( [] )

   return (
      <>
         <Head>
            <title>NextJS !Объединяй</title>
         </Head>

         {/*<Nav region={ region }/>*/ }
         <Header style={ headerStyle }/>
         <main>
            <Tariffs>
               { Object.keys( tariffs ).map( key =>
                  <SwiperSlide key={ key }>
                     <NewCard
                        key={ key }
                        id={ key }
                        premium={ tariffs.premium }
                        tariff={ tariffs[key] }
                        tariffs={ tariffs }
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


export const getStaticProps = wrapper.getStaticProps( ( store ) => async () => {

   const { data } = await axios.get( 'https://moscow.home.megafon.ru/billing/bt/json/getalltarifs' )
   store.dispatch( setInitialStateTariffs( data ) )

   // const region = await getRegion()

   return { props: { test: data } }
} )