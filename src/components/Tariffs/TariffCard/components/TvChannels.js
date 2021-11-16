import * as PropTypes from "prop-types"
import Collapse from 'react-bootstrap/Collapse'
import React from 'react'
import TvChannelsGroup from "./TvChannelsGroup";


export default function TvChannels(props) {

   function isCollapseChannels(i) {
      const newArr = Object.assign( [], props.collapse.collapseChannels )
      newArr[i] = !newArr[i]
      props.collapse.setCollapseChannels( newArr )
   }


   return (
      <div className="block-progress__progress-bar info-progress-bar">
         <div className="info-progress-bar__text card__info-title">
            <p>ТВ</p>
            <div>
               <div className="block-progress__desc desk-channels">

                  <div className="block-progress__desc_icon tv"/>

                  <a onClick={() => props.collapse.setCollapseGroup( !props.collapse.collapseGroup )}
                     aria-controls="tv-group"
                     aria-expanded={props.collapse.collapseGroup}>
                     {props.tvLength}
                  </a>

               </div>
            </div>
         </div>

         <div className="info-progress-bar__line">
            <div style={{width: props.activeProgress + "%"}}
                 className="info-progress-bar__line_active"/>
         </div>

         <Collapse in={props.collapse.collapseGroup}
                   className="multi-collapse collapse-channel">

            <ul id="tv-group" className="collapse-channel__channels">
               {props.premium.tvChannels.map( (tv, i) => (
                  <TvChannelsGroup key={tv.group}
                                   onClick={() => isCollapseChannels( i )}
                                   tv={tv}
                                   i={i}
                                   collapse={props.collapse}
                                   tvChannels={props.tvChannels}/>
               ) )}
            </ul>
         </Collapse>
      </div>)
}

TvChannels.propTypes = {
   tvLength: PropTypes.string,
   activeProgress: PropTypes.number,
   tvChannels: PropTypes.array,
}