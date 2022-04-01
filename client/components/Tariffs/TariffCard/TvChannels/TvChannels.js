import React from 'react'
import { connect } from "react-redux";
import { getChannels } from "/redux/slices/tariffsSlice";
import s from './TvChannels.module.sass'
import CollapseChannels from "../CollapseChannels/CollapseChannels";


function TvChannels( props ) {

   function collapseGroup() {
      props.collapse.setCollapseGroup( !props.collapse.collapseGroup )
   }

   function handleCollapseChannels() {
      if ( !props.premium.channels ) {
         const allTvId = Array.from( new Set(
            [
               ...props.tariffs.filter( tariff => tariff.tvId ).map( tariff => tariff.tvId )
            ] ) )
         const allPromise = []
         allTvId.forEach( ( id ) => allPromise.push( props.getChannels( id ) ) )
         return Promise.all( allPromise ).then( collapseGroup )
      }

      collapseGroup()
   }


   return (
      <div className={ s.container }>
         <div className={ s.text }>
            <p>ТВ</p>
            <button
               className={ s.description }
               onClick={ handleCollapseChannels }
               aria-controls="tv-group"
               aria-expanded={ props.collapse.collapseGroup }>
               { props.tariff.tvLength }
            </button>
         </div>

         <div className={ s.line }>
            <div
               style={ props.lineStyle }
               className={ s.line_active }
            />
         </div>

         { props.premium.channels &&
            <CollapseChannels
               collapse={ props.collapse }
               premium={ props.premium }
               tariff={ props.tariff }
            />
         }

      </div>)
}


export default connect( state => ({
   tariffs: state.tariffs
}), {
   getChannels
} )( TvChannels )