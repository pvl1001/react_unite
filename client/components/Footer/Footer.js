import s from './Footer.module.scss';


export default function Footer({className = ''}) {

   return (
      <footer className={ `${ s._ } ${ className }` }>
         <div className={ s.wrapper + ' wrapper' }>
            <div className={ s.copyright }>
               <p className={ s.copyright__age }>6+</p>
               <p>© <span id="footer_year">{ new Date().getFullYear() }</span> <br/> ПАО «Мегафон»</p>
            </div>
            <p className={ s.transfer }>
               Услуги предоставляются ООО «Нэт Бай Нэт Холдинг»и ПАО «МегаФон» на территории присутствия операторов при
               наличии технической возможности. Подробности на megafon.ru
            </p>
            <p className={ s.policy }>
               Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских
               данных, в соответствии с <a href="https://www.megafon.ru/ad/politika" target="_blank">Политикой
               конфиденциальности</a>.
            </p>
            <div className={ s.speedtest }>
               <img src="/svg/speedtest-awards.svg" alt="speedtest-awards"/>
            </div>
         </div>
      </footer>
   )

}