import Head from 'next/head';
import Header from "../components/Header/Header";
import Tariffs from "../components/Tariffs/Tariffs";
import CheckAddress from "../components/CheckAddress/CheckAddress";
import Equipments from "../components/Equipments/Equipments";
import FAQ from "../components/FAQ/FAQ";
import Nav from "../components/Nav/Nav";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import TariffCard from "../components/Tariffs/TariffCard/TariffCard";
import { SwiperSlide } from "swiper/react";
import { wrapper } from "../redux/store";
import { setInitialChannels, setInitialStateTariffs } from "../redux/slices/tariffsSlice";
import getLocationData from "../api/getLocationData";
import TariffScrollBtn from "../components/TariffScrollBtn/TariffScrollBtn";
import getChannels from "../mixins/getChannels";


export default function IndexPage() {
   const [ collapseGroup, setCollapseGroup ] = useState( false )
   const [ collapseChannels, setCollapseChannels ] = useState( [] )
   const [ stateOnChangeSlider, setStateOnChangeSlider ] = useState( null )
   const [ activeTab, setActiveTab ] = useState( '' )
   const allTariffs = useSelector( state => state.tariffs )
   const slideTariffs = useSelector( state => {
      const { internet, dvainet, hit, their, vse, turbo, econom, films, maximum, premium } = state.tariffs
      return {
         dvainet,
         turbo,
         their,
         premium,
         maximum,
         hit,
         films,
         econom,
         vse,
         internet,
      }
   } )
   const fromEntriesTariffs = Object.fromEntries(
      Object.entries( slideTariffs ).filter( t => t[1] )
   )
   const [ tariffs, setTariffs ] = useState( fromEntriesTariffs )


   useEffect( () => {
      tariffFilter( activeTab || 'Все' )
   }, [ activeTab, allTariffs ] )

   function tariffFilter( group ) {
      const filteredTariffs = new Map()
      if ( group === 'Все' ) {
         return setTariffs( fromEntriesTariffs )
      }
      for ( const key in fromEntriesTariffs ) {
         const tariff = fromEntriesTariffs[key]
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
            <Tariffs
               setActiveTab={ setActiveTab }
               setStateOnChangeSlider={ setStateOnChangeSlider }
            ><>
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
   const { dispatch, getState } = store
   // const ip = getIp( req )
   // const { location } = await getLocation( ip )
   // if ( location !== null ) {

   const { page, tariffs } = getState()
   const channelsResponses = await getChannels( tariffs )
   const { data } = await getLocationData( page.region.id )

   dispatch( setInitialStateTariffs( data ) )
   dispatch( setInitialChannels( channelsResponses ) )
   // } else {
   //    const { data } = await getLocationData( 'spb' )
   //    store.dispatch( setInitialStateTariffs( data ) )
   // }

   // return {
   //    props: { location }
   // }
} )