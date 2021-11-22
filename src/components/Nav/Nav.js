import React, {useState} from 'react'
import './Nav.scss'
import ModalCity from "../modals/ModalCity/ModalCity";


export default function Nav() {
   const [statusModalCity, setStatusModalCity] = useState(false)


   return (
      <nav className="nav">
         <div className="wrapper">
            <div className="nav__logo">
               <a href='/'/>
            </div>
            <div className="nav__phone">
               <a href="tel:88005500001">8 800 55-00-001</a>
            </div>
            <div className="nav__city" onClick={() => setStatusModalCity(true)}>
               <span>Москва и область</span>
            </div>
         </div>

         <ModalCity status={{statusModalCity, setStatusModalCity}}/>
      </nav>
   )
}
