import s from "./Response.module.scss"
import SuccessIcon from '../../../../public/svg/check.svg'

function Response( props ) {

   const { onHide, apiResponse } = props

   return (
      <div className={ s._ }>
         <button type="button" className={ s.modal_close + " modal-close" } onClick={ onHide }/>

         { apiResponse.code == 200 &&
            <div className={s.success_icon}><SuccessIcon/></div>
         }
         <h2 className={ s.title }>{ apiResponse.response_head }</h2>
         <p className={ s.text }>

            { apiResponse.response }
         </p>
      </div>
   )
}

export default Response