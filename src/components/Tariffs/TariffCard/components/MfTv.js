import * as PropTypes from "prop-types"
import ModalMftv from "../../../modals/ModalMftv/ModalMftv";
import React, {useState} from "react";


MfTv.propTypes = {
   mftv: PropTypes.array,
}


export default function MfTv(props) {

   const [statusModalMftv, setStatusModalMftv] = useState( false )


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
                    onClick={() => setStatusModalMftv( true )}
               />
            ) )}
         </div>


         <ModalMftv status={{statusModalMftv, setStatusModalMftv}} mftv={props.mftv}/>
      </div>
   )
}
