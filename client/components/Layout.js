// import Support from "./Support/Support";
import Footer from "./Footer/Footer";
import ModalCity from "./_modals/City/ModalCity";
import ModalOrder from "./_modals/Order/ModalOrder";
import ModalTariff from "./_modals/Tariff/ModalTariff";
import ModalMftv from "./_modals/Mftv/ModalMftv";
import ModalMegaTariff from "./_modals/MegaTariff/ModalMegaTariff";
import ModalAlmond from "./_modals/Almond/ModalAlmond";
import ModalAboutAlmond from "./_modals/AboutAlmond/ModalAboutAlmond";
import ChoiceRouter from "./_modals/ChoiceRouter/ChoiceRouter";
import ModalEquipment from "./_modals/Equipment/ModalEquipment";
import ModalChannels from "./_modals/Channels/ModalChannels";


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
         <ModalMegaTariff/>
         <ModalAlmond/>
         <ModalAboutAlmond/>
         <ChoiceRouter/>
         <ModalEquipment/>
         {/*<ModalChannels/>*/}
      </>
   )
}