import React, {useEffect, useRef} from 'react'
import './Nav.scss'
import {connect} from "react-redux";
import showModal from "../../redux/actions/showModal";
import {setDataOrder} from "../../redux/reducers/orderReducer";


function Nav(props) {
   const refCity = useRef(null)
   useEffect(() => {
      props.setDataOrder({city: refCity.current.textContent})
   })

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
               <span ref={refCity}>Москва и область</span>
            </div>
         </div>
      </nav>
   )
}


const mapDispatchToProps = {
   showModal,
   setDataOrder
}

export default connect(null, mapDispatchToProps)(Nav)
