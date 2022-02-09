import React from "react";
import {connect} from "react-redux";
import {showModal} from "../../../../redux/modals/modalsAction";
import MftvIcon from '../../../../public/svg/mftv-round.svg'


function MfTv(props) {

   function showModalMfTv() {
      props.showModal({modal: 'mftv', bool: true, props: {mftv: props.mftv, tariff: props.tariff}})
   }


   return (
      <div className="card__mf-tv card__option-icon">
         <div className="card__icon">
            <MftvIcon/>
         </div>

         <p>
            Фильмы и сериалы: {props.mftv.map((el, i) =>
            <span
               key={el.name}
               className="card__mf-tv-item"
               dangerouslySetInnerHTML={{__html: el.name + (i !== props.mftv.length - 1 ? ',&nbsp' : '')}}
               onClick={showModalMfTv}
            />
         )}
         </p>

      </div>

   )
}


export default connect(
   null,
   {showModal}
)(MfTv)
