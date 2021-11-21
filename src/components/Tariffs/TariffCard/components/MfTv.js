import * as PropTypes from "prop-types"

export default function MfTv({mftv}) {
   return (
      <div className="card__block-tv block-tv">

         <h3 className="block-tv__title card__info-title">
            МегаФон ТВ:
         </h3>


         <div className="block-tv__icons tv-icons">
            {mftv.map( el => (
               <div key={el.icon}
                    data-toggle="modal"
                    data-target="#mftv-{{../id}}"
                    className={`tv-icons__icon tv-icons__icon_${el.icon}`}
               />
            ) )}
         </div>

      </div>
   )
}

MfTv.propTypes = {
   mftv: PropTypes.array,
}