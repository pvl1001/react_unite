import * as PropTypes from "prop-types"
import React from "react";
import {connect} from "react-redux";
import showModal from "../../../../redux/actions/showModal";


MfTv.propTypes = {
   mftv: PropTypes.array,
}


function MfTv(props) {

   const showModalMfTv = () => props.showModal( {modal: 'mftv', bool: true, props: props.mftv} )

   return (
      <div className="card__mf-tv card__option-icon">
         <div className="card__icon">
            <svg xmlns="http://www.w3.org/2000/svg" id="icon-full_set_24px-megafon-tv_24" width="33"
                 viewBox="0 0 32 32">
               <path d="M21 14.64L12.25 11l-1.25.91v8.17l1.32.92L21 17.22zm-8 3.85v-5l6 2.44z"/>
               <circle cx="10.5" cy="25.53" r="1.1" transform="matrix(.5 -.87 .87 .5 -16.86 21.86)"/>
               <circle cx="8.22" cy="23.78" r="1.1" transform="rotate(-45 8.222 23.784)"/>
               <circle cx="6.47" cy="21.5" r="1.1" transform="rotate(-30 6.48 21.496)"/>
               <path
                  d="M16 4A12 12 0 0 0 4.41 19.11l1.93-.52a10 10 0 1 1 7.07 7.07l-.52 1.93A12 12 0 1 0 16 4z"/>
            </svg>
         </div>
         <p>
            Фильмы и сериалы: {props.mftv.map( (el, i) =>
            <span key={el.name}
                  className="card__mf-tv-item"
                  dangerouslySetInnerHTML={{__html: el.name + (i !== props.mftv.length -1 ? ',&nbsp' : '')}}
                  onClick={showModalMfTv}
            />
         )}
         </p>

      </div>

   )
}


const mapDispatchToProps = {showModal}

export default connect( null, mapDispatchToProps )( MfTv )
