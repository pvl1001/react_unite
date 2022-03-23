import s from './Footer.module.sass';
import { useSelector } from 'react-redux';

export default function Footer() {
   const transfer = useSelector( state => state.page.footer )


   return (
      <footer className={ s.container }>
         <div className={ s.wrapper + ' wrapper' }>
            <div className={ s.copyright }>
               <div className={ s.copyright__age }>6+</div>
               <div className={ s.copyright__text }>© 2022 <br/> ПАО «Мегафон»</div>
            </div>
            <p className={ s.transfer }>{ transfer }</p>
            <p className={ s.policy }>
               Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других
               пользовательских данных, в соответствии с <a href="https://www.megafon.ru/ad/politika"
                                                            target="_blank"
                                                            rel="noreferrer">Политикой конфиденциальности</a>.
            </p>
            <div className={ s.speedtest }>
               <img src={ '/svg/speedtest-awards.svg' } alt="speedtest"/>
            </div>
         </div>
      </footer>
   )
}