import Collapse from "react-bootstrap/Collapse";
import React from "react";
import s from './TvGroup.module.sass'


export default function TvGroup( props ) {

   function isChannelGreen( premiumGroup, premiumChannel ) {
      const findGroup = props.channels[premiumGroup]
      return findGroup?.find( el => el.name === premiumChannel ) && { color: 'var(--mf-green)' }
   }


   return (
      <li className={ s.container }>

         <div className={ s.toggle }>

            <div
               onClick={ props.onClick }
               aria-controls={ `tv-channels-${ props.i }` }
               aria-expanded={ props.collapse.collapseChannels[props.i] }
               className={ s.wrapper }>

               <span>{ props.groupName }</span>

               <span className={ s.count }>
                  { props.channels[props.groupName]?.length ?? 0 }
               </span>
            </div>

         </div>

         <Collapse in={ props.collapse.collapseChannels[props.i] }>

            <ul
               id={ `tv-channels-${ props.i }` }
               className={ s.list }>
               { props.premium.channels[props.groupName].map( channel =>
                  <li
                     key={ channel.id }
                     style={ isChannelGreen( props.groupName, channel.name ) }>
                     { channel.name }
                  </li>
               ) }

            </ul>

         </Collapse>

      </li>
   )
}
