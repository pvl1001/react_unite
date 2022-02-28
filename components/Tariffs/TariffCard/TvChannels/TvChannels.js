import Collapse from 'react-bootstrap/Collapse'
import React from 'react'
import TvGroup from "../TvGroup/TvGroup";
import { connect } from "react-redux";
import { getChannels } from "/redux/slices/tariffsSlice";
import s from './TvChannels.module.sass'


function TvChannels( props ) {

   function isCollapseChannels( i ) {
      const collapseChannels = [ ...props.collapse.collapseChannels ]
      collapseChannels[i] = !collapseChannels[i]
      props.collapse.setCollapseChannels( collapseChannels )
   }

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
               { props.tvLength }
            </button>
         </div>

         <div className={ s.line }>
            <div
               style={ props.lineStyle }
               className={ s.line_active }
            />
         </div>

         { props.premium.channels &&
            <Collapse
               in={ props.collapse.collapseGroup }
               className={ s.collapse }>

               <ul className={ s.collapse__channels }>
                  { Object.keys( props.premium.channels )
                     .map( ( groupName, i ) =>
                        props.channels &&
                        <TvGroup
                           key={ groupName }
                           onClick={ () => isCollapseChannels( i ) }
                           groupName={ groupName }
                           i={ i }
                           collapse={ props.collapse }
                           channels={ props.channels }
                           premium={ props.premium }
                        />
                     ) }
               </ul>
            </Collapse>
         }

      </div>)
}


export default connect( state => ({
   tariffs: state.tariffs
}), {
   getChannels
} )( TvChannels )