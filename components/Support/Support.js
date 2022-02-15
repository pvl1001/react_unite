import s from './Support.module.sass'
import SupportIcon from '../../public/svg/support-avatar.svg'
import ArrowIcon from '../../public/svg/arrow_slider.svg'

export default function Support() {
   return (
      <div className={ s.container }>

         <div className={ s.wrapper + ' wrapper' }>
            <div className={ s.phone }>
               <a href="tel:88005500500">8 800 55-00-500</a>
            </div>

            <div className={ s.icon }>
               <SupportIcon/>
            </div>

            <div className={ s.link }>
               <a target="_blank" rel="noreferrer" href="https://help.home.megafon.ru">
                  Поддержка <ArrowIcon/>
               </a>
            </div>
         </div>

      </div>
   )
}