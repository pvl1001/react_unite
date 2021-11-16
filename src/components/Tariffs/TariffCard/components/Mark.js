import * as PropTypes from "prop-types"

Mark.propTypes = {
   mark: PropTypes.string
}


export default function Mark({mark}) {

   let className = 'card__title-mark mark'
   if (mark === 'Акция') className += ' mark_orange'
   if (mark === 'Только нужное') className += ' mark_blue'
   if (mark === 'Популярное') className += ' mark_fiolet'


   return (
      <div className={className}>
         <span>{mark}</span>
      </div>
   )
}

