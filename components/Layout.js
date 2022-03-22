// import Support from "./Support/Support";
import Footer from "./Footer/Footer";
import ModalCity from "./modals/City/ModalCity";
import ModalOrder from "./modals/Order/ModalOrder";
import ModalTariff from "./modals/Tariff/ModalTariff";
import ModalMftv from "./modals/Mftv/ModalMftv";
import ModalTariffAll from "./modals/TariffAll/ModalTariffAll";
import ModalAlmond from "./modals/Almond/ModalAlmond";
import ModalAboutAlmond from "./modals/AboutAlmond/ModalAboutAlmond";
import ChoiceRouter from "./modals/ChoiceRouter/ChoiceRouter";
import ModalEquipment from "./modals/Equipment/ModalEquipment";
import ModalChannels from "./modals/Channels/ModalChannels";


export default function Layout( { children } ) {
   return (
      <>
         {/*<Support/>*/ }
         { children }
         <Footer/>

         <ModalCity/>
         <ModalOrder/>
         <ModalTariff/>
         <ModalMftv/>
         <ModalTariffAll/>
         <ModalAlmond/>
         <ModalAboutAlmond/>
         <ChoiceRouter/>
         <ModalEquipment/>
         <ModalChannels/>
      </>
   )
}