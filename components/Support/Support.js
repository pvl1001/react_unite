import SupportIcon from '../../public/svg/support-avatar.svg'
import ArrowIcon from '../../public/svg/arrow_slider.svg'

export default function Support() {
   return (
      <div className="support">

         <div className="support__container wrapper">
            <div className="support__phone">
               <a href="tel:88005500500">8 800 55-00-500</a>
            </div>

            <div className="support__icon">
               <SupportIcon/>
            </div>

            <div className="support__link">
               <a target="_blank" rel="noreferrer" href="https://help.home.megafon.ru">
                  Поддержка <ArrowIcon/>
               </a>
            </div>
         </div>

      </div>
   )
}