import scrollTo from "./scrollTo";
import { store } from "../redux/store";
import { showModal } from "../redux/slices/modalsSlice";


const closeModal = ( modal ) => {
   store.getState().modals[modal].show && store.dispatch( showModal( { modal, bool: false } ) )
}

export default function ( id ) {
   closeModal( 'tariff' )

   const element = document.querySelector( `#${ id } button` )

   const handleClick = () => element.classList.contains( 'collapsed' ) && element.click()

   scrollTo( element, handleClick )
}