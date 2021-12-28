import React from 'react'
import './Nav.scss'
import {connect} from "react-redux";
import showModal from "../../redux/actions/showModal";


function Nav(props) {

   return (
      <nav className="nav">
         <div className="wrapper">
            <div className="nav__logo">
               <a href='/'> </a>
            </div>
            <div className="nav__phone">
               <a href="tel:88005500001">8 800 55-00-001</a>
            </div>
            <div className="nav__city" onClick={() => props.showModal({modal: 'cities', bool: true})}>
               <span>Москва и область</span>
            </div>
         </div>
      </nav>
   )
}


const mapDispatchToProps = {
   showModal
}

export default connect(null, mapDispatchToProps)(Nav)
