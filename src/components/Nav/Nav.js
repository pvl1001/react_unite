import React from 'react'
import './Nav.scss'


export default function Nav() {
   return (
      <nav className="nav">
         <div className="wrapper">
            <div className="nav__logo">
               <a href='/'/>
            </div>
            <div className="nav__phone">
               <a href="tel:88005500001">8 800 55-00-001</a>
            </div>
            <div className="nav__city" data-toggle="modal"
                 data-target="#citySelection" >
               <span>Москва и область</span>
            </div>
         </div>
      </nav>
   )
}
