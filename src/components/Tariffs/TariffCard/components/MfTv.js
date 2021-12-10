import * as PropTypes from "prop-types"
import ModalMftv from "../../../modals/ModalMftv/ModalMftv";
import React, {useState} from "react";
import {connect} from "react-redux";
import showModal from "../../../../redux/actions/showModal";


MfTv.propTypes = {
   mftv: PropTypes.array,
}


function MfTv(props) {

   const showModalMfTv = () => props.showModal( {modal: 'mftv', bool: true, props: props.mftv} )

   return (
      <div className="card__block-tv block-tv">

         <h3 className="block-tv__title card__info-title">
            МегаФон ТВ:
         </h3>


         <div className="block-tv__icons tv-icons">
            {props.mftv.map( el => (
               <div key={el.icon}
                    data-toggle="modal"
                    data-target="#mftv-{{../id}}"
                    className={`tv-icons__icon tv-icons__icon_${el.icon}`}
                    onClick={showModalMfTv}
               />
            ) )}
         </div>

      </div>
   )
}


const mapDispatchToProps = {showModal}

export default connect(null, mapDispatchToProps)(MfTv)
