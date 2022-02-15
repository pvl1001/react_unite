import s from './ModalTariffAll.module.sass'
import s_tariff from '/components/modals/Tariff/ModalTariff.module.sass'
import s_info from '/components/modals/Tariff/BlockInfo/BlockInfo.module.sass'
import { Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { showModal } from "../../../redux/modals/modalsAction";
import ItemOption from "./ItemOption";


function ModalTariffAll( props ) {

   const options = [
      {
         "name": "Абонентская плата",
         "description": "",
         "value": "360 ₽ за 30 дней"
      },
      {
         "name": "Звонки на все мобильные номера России",
         "description": "Для новых абонентов звонки на городские номера входят в пакет первые 6 месяцев",
         "value": "600 минут"
      },
      {
         "name": "Звонки на номера МегаФона России",
         "description": "",
         "value": "Безлимитно"
      },
      {
         "name": "Интернет",
         "description": "",
         "value": "Безлимитно"
      },
      {
         "name": "SMS на номера МегаФон России",
         "description": "Для новых абонентов первые 6 месяцев",
         "value": "Безлимитно"
      },
      {
         "name": "SMS на прочие номера России",
         "description": "Для новых абонентов первые 6 месяцев",
         "value": "300 сообщений"
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
            Без переплат. Всё
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

         </div>
      </Modal>
   )

}


export default connect( state => ({
   show: state.modals.tariffAll.show
}), {
   showModal
} )( ModalTariffAll )
