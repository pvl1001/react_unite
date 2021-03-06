import s from './ModalMegaTariff.module.sass'
import s_modalMftv from '../Mftv/ModalMftv.module.sass'
import s_info from '../Tariff/BlockInfo/BlockInfo.module.sass'
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import ItemOption from "./ItemOption";


function ModalMegaTariff() {
   const dispatch = useDispatch()
   const { show } = useSelector( state => state.modals.megaTariff )
   const { name, price, minutes, web, sms } = useSelector( state => state.megaTariff )
   const linkDownload = '/uploads/docs/2021/bez_pereplat/tariff_5189_chuvashia.pdf'
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
   const onHide = () => dispatch( showModal( { modal: 'megaTariff', bool: false } ) )


   return (
      <Modal
         centered
         animation={ false }
         show={ show }
         onHide={ onHide }
         className={ s_modalMftv.modal }
         dialogClassName={ s_modalMftv.modal_dialog }
         contentClassName={ `${ s_modalMftv.modal_content } ${ s.modal_content }` }
      >
         <div className={ s_modalMftv.btn_close }>
            <button
               type="button"
               className={ s_modalMftv.modal_close + " modal-close-round" }
               onClick={ onHide }
            />
         </div>

         <h1 className={ `${ s_modalMftv.title } ${ s_modalMftv.wrapp }` }>
            Без переплат. { name }
         </h1>

         <div className={ s_modalMftv.container }>
            <ul className={ `${ s_modalMftv.items } ${ s.items }` }>
               <li className={ `${ s_info.container } ${ s_modalMftv.wrapp } ${ s.item }` }>
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
            <div className={ `${ s.footer } ${ s_modalMftv.wrapp }` }>
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


export default ModalMegaTariff
