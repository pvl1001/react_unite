import s from './ModalTariff.module.sass'
import { connect } from "react-redux";
import { Modal } from "react-bootstrap";
import { showModal } from "../../../redux/slices/modalsSlice";
import CardOption from "./CardOption/CardOption";
import CardOptionSim from "./CardOption/CardOptionSim";
import BlockInfo from "./BlockInfo/BlockInfo";
import Footer from "./Footer/Footer";
import BannerMfTv from "./BannerMfTv/BannerMfTv";


function ModalTariff( { tariff, show, id, showModal } ) {
   const isPremium = id === 'premium'

   if ( show ) {
      const infoModal = [
         tariff.inet && {
            title: "Мобильная связь",
            icon: "mob_bold",
            options: [
               {
                  name: "Мобильный интернет",
                  description: "",
                  value: tariff.inet + " ГБ"
               },
               {
                  name: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе",
                  description: "",
                  value: "Безлимитно"
               },
               {
                  name: "Звонки на все номера России",
                  description: "Звонки на городские номера и межгород включены в пакет. Звонки на номера МегаФона России не расходуют пакет минут.",
                  value: tariff.minutes + " минут"
               },
               tariff.youtube && {
                  name: "Интернет на социальные сети и YouTube",
                  description: "Мессенджеры и звонки на номера МегаФона доступны при любом балансе.\n" +
                     "Эти приложения не расходуют интернет по тарифу: WhatsApp, Viber, Telegram, eMotion, Facebook Messenger, ТамТам, Snapchat.",
                  value: "Безлимитно"
               },
               {
                  name: "SMS на номера России",
                  value: "50 сообщений"
               }
            ]
         },
         tariff.speed && {
            title: "Домашний интернет",
            icon: "wi-fi_bold",
            options: [
               {
                  name: "Скорость",
                  description: "Максимальная скорость интернет-соединения, предусмотренная тарифом.",
                  value: tariff.speed + " Мбит/с"
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         },
         tariff.tvchan != 0 && {
            title: "ТВ",
            icon: "TV_bold",
            options: [
               {
                  name: "Мегафон ТВ",
                  description: "",
                  value: tariff.tvchan + ' каналов'
               },
               {
                  name: "Трафик",
                  description: "",
                  value: "Безлимитно"
               }
            ]
         }
      ]

      function onHide() {
         showModal( {
            modal: 'tariff',
            bool: false
         } )
      }


      return (
         <Modal
            centered
            animation={ false }
            show={ show }
            onHide={ onHide }
            className={ `${ s.modal } ${ isPremium ? s.premium : '' }` }
            dialogClassName={ s.modal_dialog }
            contentClassName={ s.modal_content }>

            <div className={ s.modal_scroll }>
               <div className={ s.btn_close }>
                  <button
                     type="button"
                     className={ s.modal_close + " modal-close-round" }
                     onClick={ onHide }
                  />
               </div>

               <div className={ `${ s.title } ${ s.wrapp }` }>
                  <h1>{ tariff.name }</h1>
               </div>

               <div className={ s.container }>

                  <ul className={ s.items }>
                     { infoModal.map( info =>
                           info && <BlockInfo
                              key={ info.title }
                              info={ info }
                              tariff={ tariff }
                           />
                     ) }
                  </ul>

                  { tariff.mftv &&
                     <BannerMfTv
                        mftv={ tariff.mftv }
                        tariff={ tariff }
                     />
                  }

                  <div className={ `${ s.dop_options } ${ s.wrapp }` }>
                     <h2 className={ s.dop_options__title }>Дополнительные опции:</h2>

                     <ul className={ s.dop_options__cards }>
                        { Object.keys( tariff.equipments ).map( ( key ) =>
                           tariff.equipments[key].id === 'sim'
                              ? <CardOptionSim
                                 key={ key }
                                 eqKey={ key }
                                 equipment={ tariff.equipments[key] }
                                 id={ id }
                              />
                              : <CardOption
                                 key={ key }
                                 eqKey={ key }
                                 equipment={ tariff.equipments[key] }
                                 id={ id }
                              />
                        ) }
                     </ul>

                     { tariff.link &&
                        <div className={ "download-pdf" }>
                           <button className="download-pdf__icon">
                              <img src={ '/svg/download-pdf.svg' } alt="download-pdf"/>
                           </button>
                           <div className={ s.download_pdf__text }>
                              <a href={ tariff.link } className="download-pdf__text-link">
                                 Скачать подробную информацию о тарифе</a>
                              <span className="download-pdf__text-pdf"> (PDF, 0.4 MB)</span>
                           </div>
                        </div>
                     }
                  </div>
               </div>

               <Footer tariff={ tariff } id={ id }/>
            </div>

         </Modal>
      )
   }

   return null
}


export default connect( state => ({
   pageName: state.page.name,
   show: state.modals.tariff.show,
   id: state.modals.tariff.props,
   get tariff() {
      return state.tariffs[this.id]
   },
}), {
   showModal
} )( ModalTariff )