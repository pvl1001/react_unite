import s from "./CollapseChannels.module.sass";
import Collapse from "react-bootstrap/Collapse";


function CollapseChannels( props ) {

   function isCollapseChannels( i ) {
      const collapseChannels = [ ...props.collapse.collapseChannels ]
      collapseChannels[i] = !collapseChannels[i]
      props.collapse.setCollapseChannels( collapseChannels )
   }

   function isChannelGreen( premiumGroup, premiumChannel ) {
      const findGroup = props.tariff.channels[premiumGroup]
      return findGroup?.find( el => el.name === premiumChannel ) && { color: 'var(--mf-green)' }
   }


   return (
      <Collapse
         in={ props.collapse.collapseGroup }
         className={ s.collapse }>

         <ul>
            { Object.keys( props.premium.channels )
               .map( ( groupName, i ) =>
                  props.tariff.channels &&
                  <li key={ groupName } className={ s.container }>

                     <div className={ s.toggle }>

                        <div
                           onClick={ () => isCollapseChannels( i ) }
                           aria-controls={ `tv-channels-${ i }` }
                           aria-expanded={ props.collapse.collapseChannels[i] }
                           className={ s.wrapper }>

                           <span>{ groupName }</span>

                           <span className={ s.count }>
                              { props.tariff.channels[groupName]?.length ?? 0 }
                           </span>
                        </div>

                     </div>

                     <Collapse in={ props.collapse.collapseChannels[i] }>
                        <ul
                           id={ `tv-channels-${ i }` }
                           className={ s.list }>
                           { props.premium.channels[groupName].map( channel =>
                              <li
                                 key={ channel.id }
                                 style={ isChannelGreen( groupName, channel.name ) }>
                                 { channel.name }
                              </li>
                           ) }
                        </ul>
                     </Collapse>

                  </li>
               ) }
         </ul>
      </Collapse>
   )
}

export default CollapseChannels