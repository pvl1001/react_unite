import Head from 'next/head';
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import Nav from "../components/Nav/Nav";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import NewCard from "../components/Tariffs/NewCard/NewCard";
import { SwiperSlide } from "swiper/react";
import { wrapper } from "../redux/store";
import { setInitialStateTariffs } from "../redux/slices/tariffsSlice";
import getIp from "../api/getIp";
import getLocation from "../api/getLocation";
import getLocationData from "../api/getLocationData";


export default function IndexPage( { location } ) {

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

         <Nav region={ location }/>
         <Header/>
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


export const getServerSideProps = wrapper.getServerSideProps( store => async ( { req } ) => {

   const ip = getIp( req )
   const { location } = await getLocation( ip )

   if( location !== null ) {
      const { data } = await getLocationData('moscow')
      store.dispatch( setInitialStateTariffs( data ) )
   } else {
      const { data } = await getLocationData( 'spb' )
      store.dispatch( setInitialStateTariffs( data ) )
   }

   return {
      props: { location }
   }
} )