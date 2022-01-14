import Collapse from "react-bootstrap/Collapse";
import React from "react";


export default function TvChannelsGroup(props) {

   function isChannelGreen(premiumGroup, premiumChannel) {
      const findGroup = props.channels[premiumGroup]
      if (findGroup) {
         return findGroup.find( el => el.name === premiumChannel )
            ? ' text-green'
            : ''
      }
   }


   return (
      <li className="collapse-channel__channel-group">

         <div className="collapse-channel__group-toggle">

            <div onClick={props.onClick}
                 aria-controls={`tv-channels-${props.i}`}
                 aria-expanded={props.collapse.collapseChannels[props.i]}
                 className="collapse-channel__group-wrapper">
               <span className="collapse-channel__group-name">{props.groupName}</span>
               <span className="collapse-channel__group-count">
                  {props.channels[props.groupName] ? props.channels[props.groupName].length : 0}
               </span>
            </div>

         </div>

         <Collapse in={props.collapse.collapseChannels[props.i]}>

            <ul id={`tv-channels-${props.i}`} className="collapse-channel__group-list">

               {props.premium.channels[props.groupName].map( channel => (
                  <li key={channel.id}
                      className={"collapse-channel__group-channelName" + isChannelGreen( props.groupName, channel.name )}>
                     {channel.name}
                  </li>
               ) )}

            </ul>

         </Collapse>

      </li>)
}
