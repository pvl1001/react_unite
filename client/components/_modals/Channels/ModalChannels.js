import s from './ModalChannels.module.sass';
import { Modal } from 'react-bootstrap';
import { connect } from 'react-redux';
import { showModal } from "../../../redux/slices/modalsSlice";
import { Accordion } from "react-bootstrap";


function ModalChannels( { show, showModal, tariff } ) {

   function onHide() {
      showModal( { modal: 'channels', bool: false } )
   }


   if ( !tariff.channels ) return null

   return (
      <Modal
         centered
         animation={ false }
         show={ show && tariff.channels }
         onHide={ onHide }
         dialogClassName={ s.modal_dialog }
         contentClassName={ s.modal_content }>

         <div className={ `${ s.head } ${ s.wrapp }` }>
            <button
               type="button"
               className="modal-close"
               onClick={ onHide }
            />

            <h1>МегаФон ТВ</h1>
         </div>

         <Accordion bsPrefix={ `${ s.body } ${ s.wrapp }` }>

            { Object.keys( tariff.channels ).map( group =>
               <Accordion.Item
                  key={ group }
                  bsPrefix={ s.item }
                  eventKey={ group }
               >
                  <Accordion.Header bsPrefix={ s.group }>
                     <div className={ s.group__name }>{ group }</div>
                     <div className={ s.group__count }>{ tariff.channels[group].length }</div>
                  </Accordion.Header>

                  <Accordion.Body bsPrefix={ s.list_channels }>
                     { tariff.channels[group].map( channel =>
                        <div key={ channel.id }>{ channel.name }</div>
                     ) }
                  </Accordion.Body>
               </Accordion.Item>
            ) }

         </Accordion>

      </Modal>
   )
}


export default connect( state => ({
   show: state.modals.channels.show,
   tariff: state.tariffs.vse
}), {
   showModal
} )( ModalChannels )



