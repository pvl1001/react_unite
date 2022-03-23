import s from './ModalMegaTariff.module.sass'
import s_tariff from '/components/modals/Tariff/ModalTariff.module.sass'
import s_info from '/components/modals/Tariff/BlockInfo/BlockInfo.module.sass'
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import ItemOption from "./ItemOption";


function ModalMegaTariff( props ) {
   const linkDownload = '/uploads/docs/2021/bez_pereplat/tariff_5189_chuvashia.pdf'
   const { name, price, minutes, web, sms } = props.megaTariff
   const options = [
      {
         "name": "Абонентская плата",
         "description": "",
         "value": `${ price } ₽ за 30 дней`
      },
      {
         "name": "Звонки на все номера России",
         "description": "Звонки на городские номера и межгород включены в пакет. Звонки на номера МегаФона России не расходуют пакет минут.",
         "value": `${ minutes } минут`
      },
      {
         "name": "Интернет",
         "description": "",
         "value": `${ web } ГБ`
      },
      {
         "name": "SMS на номера России",
         "description": "",
         "value": `${ sms } сообщений`
      },
      {
         "name": "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
         "description": "Даже при отрицательном балансе можно написать сообщение и звонить на номера МегаФона до ближайшей даты списания абонентской платы. Эти приложения не расходуют интернет по тарифу: WhatsApp, Viber, Telegram, eMotion, Facebook Messenger, ТамТам, Snapchat.",
         "value": "Безлимитно"
      }
   ]
   const onHide = () => props.showModal( { modal: 'tariffAll', bool: false } )


   return (
      <Modal
         centered
         animation={ false }
         show={ props.show }
         onHide={ onHide }
         className={ s_tariff.modal }
         dialogClassName={ s_tariff.modal_dialog }
         contentClassName={ `${ s_tariff.modal_content } ${ s.modal_content }` }
      >
         <div className={ s_tariff.btn_close }>
            <button
               type="button"
               className={ s_tariff.modal_close + " modal-close" }
               onClick={ onHide }
            />
         </div>

         <h1 className={ `${ s_tariff.title } ${ s_tariff.wrapp }` }>
            Без переплат. { name }
         </h1>

         <div className={ s_tariff.container }>
            <ul className={ `${ s_tariff.items } ${ s.items }` }>
               <li className={ `${ s_info.container } ${ s_tariff.wrapp } ${ s.item }` }>
                  <ul className={ s.options }>

                     { options.map( option =>
                        <ItemOption
                           key={ option.name }
                           option={ option }
                        />
                     ) }

                  </ul>
               </li>
            </ul>
            <div className={ `${ s.footer } ${ s_tariff.wrapp }` }>
               <div className={ `${ s.footer__container } download-pdf` }>
                  <a href={ linkDownload } className="download-pdf__icon">
                     <img src="/svg/download-pdf.svg" alt="download-pdf"/>
                  </a>
                  <div className="download-pdf__text">
                     <a href={ linkDownload }>Скачать подробную информацию о тарифе</a> <span>(PDF)</span>
                  </div>
               </div>
            </div>
         </div>

      </Modal>
   )

}


export default connect( state => ({
   show: state.modals.tariffAll.show,
   megaTariff: state.megaTariff
}), {
   showModal
} )( ModalMegaTariff )
