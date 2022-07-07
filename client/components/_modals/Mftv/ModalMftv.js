import s from './ModalMftv.module.sass'
import { Modal } from "react-bootstrap";
import FaqMftv from "./FaqMftv/FaqMftv";
import { useDispatch, useSelector } from "react-redux";
import { showModal } from "../../../redux/slices/modalsSlice";
import ItemMftv from "./ItemMftv/ItemMftv";
import { useEffect } from "react";
import { setDataOrder } from "../../../redux/slices/orderSlice";


function ModalMftv() {
   const dispatch = useDispatch()
   const { show, props } = useSelector( state => state.modals.mftv )
   const tariff = props?.tariff
   const id = props?.id


   useEffect( () => {
      if ( show ) {
         dispatch( setDataOrder( {
            tariffName: tariff.name,
            tariffId: tariff.tariffId,
            equipments: Object.entries( tariff.equipments ).map( eq => eq[1] ),
            price: tariff.totalPrice || tariff.price,
         } ) )
      }
   }, [ show ] )

   if ( tariff ) {

      const onHide = () => dispatch( showModal( { modal: 'mftv', bool: false } ) )

      return (
         <Modal
            centered
            animation={ false }
            show={ show }
            onHide={ onHide }
            className={ s.modal }
            dialogClassName={ s.modal_dialog }
            contentClassName={ s.modal_content }
         >

            <div className={ s.btn_close }>
               <button
                  type="button"
                  className={ s.modal_close + " modal-close-round" }
                  onClick={ onHide }
               />
            </div>

            <h1 className={ `${ s.title } ${ s.wrapp }` }>МегаФон ТВ</h1>

            <div className={ s.container }>

               <ul className={ s.items }>
                  { tariff.mftv.map( item =>
                     <ItemMftv key={ item.name } item={ item }/>
                  ) }
               </ul>

               <FaqMftv tariff={ tariff } id={ id }/>
            </div>

         </Modal>
      )
   }

   return null
}


export default ModalMftv