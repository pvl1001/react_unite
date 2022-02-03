import * as PropTypes from "prop-types"

export default function ProgressBar(props) {

   return (
      <div className="block-progress__progress-bar info-progress-bar">

         <div className="info-progress-bar__text card__info-title">
            <p className="info-progress-bar__text-name" dangerouslySetInnerHTML={{__html: props.pb.title}}/>
            <p className="info-progress-bar__text-value" dangerouslySetInnerHTML={{__html: props.pb.value}}/>
         </div>

         <div className="info-progress-bar__line">
            <div style={{width: props.activeProgress + "%"}}
                 className="info-progress-bar__line_active"/>
         </div>

      </div>)
}

ProgressBar.propTypes = {
   pb: PropTypes.object,
   activeProgress: PropTypes.number
}
