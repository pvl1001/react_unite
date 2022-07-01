import Head from 'next/head';
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
// import AppBanner from "../components/AppBanner/AppBanner";
import FAQ from "../components/FAQ/FAQ";
import Nav from "../components/Nav/Nav";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TariffCard from "../components/Tariffs/TariffCard/TariffCard";
import { SwiperSlide } from "swiper/react";
import { wrapper } from "../redux/store";
import { setInitialChannels, setInitialStateTariffs } from "../redux/slices/tariffsSlice";
// import getIp from "../api/getIp";
// import getLocation from "../api/getLocation";
import getLocationData from "../api/getLocationData";
import axios from "axios";
import TariffScrollBtn from "../components/TariffScrollBtn/TariffScrollBtn";


export default function IndexPage( { location, data } ) {
   // const dispatch = useDispatch()
   const [ collapseGroup, setCollapseGroup ] = useState( false )
   const [ collapseChannels, setCollapseChannels ] = useState( [] )
   const [ stateOnChangeSlider, setStateOnChangeSlider ] = useState( null )
   const t = useSelector( state => {
      const { internet, dvainet, hit, their, vse, turbo, econom, films, maximum, premium } = state.tariffs
      return { internet, dvainet, hit, their, vse, turbo, econom, films, maximum, premium }
   } )
   const [ tariffs, setTariffs ] = useState( t )

   function tariffFilter( group ) {
      const filteredTariffs = new Map()
      if ( group === 'Все' ) {
         return setTariffs( t )
      }
      for ( const key in t ) {
         const tariff = t[key]
         const tariffGroup = tariff.name.split( ' ' )[0]
         if ( tariffGroup === group ) {
            filteredTariffs.set( key, tariff )
         }
      }
      setTariffs( Object.fromEntries( filteredTariffs ) )
   }


   return (
      <>
         <Head>
            <title>NextJS !Объединяй</title>
         </Head>

         <Nav/>
         <Header/>
         <main>
            <Tariffs tariffFilter={ tariffFilter } setStateOnChangeSlider={ setStateOnChangeSlider }><>
               { Object.keys( tariffs ).map( key =>
                  <SwiperSlide key={ key } id={ key }>
                     <TariffCard
                        key={ key }
                        id={ key }
                        premium={ tariffs.premium || tariffs.maximum }
                        tariff={ tariffs[key] }
                        collapse={ {
                           collapseGroup,
                           setCollapseGroup,
                           collapseChannels,
                           setCollapseChannels
                        } }
                     />
                  </SwiperSlide>
               ) }
            </>
            </Tariffs>
            <TariffScrollBtn tariffs={ tariffs }/>
            <CheckAddress/>
            <Equipments/>
            <FAQ/>
         </main>
      </>
   )
}


export const getServerSideProps = wrapper.getServerSideProps( store => async ( { req, res } ) => {

   // const ip = getIp( req )
   // const { location } = await getLocation( ip )
   // if ( location !== null ) {

   const { tariffs } = store.getState()
   const allTvId = Array.from( new Set(
      [
         ...Object.values( tariffs )
            .filter( tariff => tariff.tvId )
            .map( tariff => tariff.tvId )
      ] ) )

   const channelsPromises = allTvId.map( tvId => axios( `https://home.megafon.ru/billing/bt/json/gettvchannelsbygroup?pack_id=${ tvId }` ) )

   const channelsResponses = await Promise.all( channelsPromises )
   const { data } = await getLocationData( 'moscow' )

   store.dispatch( setInitialStateTariffs( data ) )
   store.dispatch( setInitialChannels( channelsResponses ) )
   // } else {
   //    const { data } = await getLocationData( 'spb' )
   //    store.dispatch( setInitialStateTariffs( data ) )
   // }

   // return {
   //    props: { location }
   // }
} )