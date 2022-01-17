import Collapse from 'react-bootstrap/Collapse'
import React from 'react'
import TvChannelsGroup from "./TvChannelsGroup";
import {connect} from "react-redux";
import {getChannels} from "../../../../redux/reducers/tariffsReducer";


function TvChannels(props) {

   function isCollapseChannels(i) {
      const collapseChannels = [...props.collapse.collapseChannels]
      collapseChannels[i] = !collapseChannels[i]
      props.collapse.setCollapseChannels(collapseChannels)
   }

   function collapseGroup() {
      props.collapse.setCollapseGroup(!props.collapse.collapseGroup)
   }

   function handleCollapseChannels() {
      if (!props.premium.channels) {
         const allTvId = Array.from(new Set(
            [...props.tariffs.filter(tariff => tariff.tvId).map(tariff => tariff.tvId)
            ]))
         const allPromise = []
         allTvId.forEach((id) => allPromise.push(props.getChannels(id)))
         return Promise.all(allPromise).then(collapseGroup)
      }

      collapseGroup()

   }


   return (
      <div className="block-progress__progress-bar info-progress-bar">
         <div className="info-progress-bar__text card__info-title">
            <p>ТВ</p>
            <div>
               <div className="block-progress__desc desk-channels">

                  <div className="block-progress__desc_icon tv"/>

                  <button onClick={handleCollapseChannels}
                          aria-controls="tv-group"
                          aria-expanded={props.collapse.collapseGroup}>
                     {props.tvLength}</button>

               </div>
            </div>
         </div>

         <div className="info-progress-bar__line">
            <div style={{width: props.activeProgress + "%"}}
                 className="info-progress-bar__line_active"/>
         </div>
         <br/>

         {props.premium.channels &&
            <Collapse in={props.collapse.collapseGroup}
                      className="multi-collapse collapse-channel">

               <ul className="collapse-channel__channels">
                  {Object.keys(props.premium.channels).map((groupName, i) => (
                     <TvChannelsGroup key={groupName}
                                      onClick={() => isCollapseChannels(i)}
                                      groupName={groupName}
                                      i={i}
                                      collapse={props.collapse}
                                      channels={props.channels}
                                      premium={props.premium}/>
                  ))}
               </ul>

            </Collapse>
         }

      </div>)
}


const mapStateToProps = state => ({
   tariffs: state.tariffs
})

export default connect(
   mapStateToProps,
   {getChannels}
)(TvChannels)