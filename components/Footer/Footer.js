export default function Footer() {
   return (
      <footer className="footer">
         <div className="wrapper">
            <div className="footer__copyright copyright">
               <div className="copyright__age">6+</div>
               <div className="copyright__text">© 2021 <br/> ПАО «Мегафон»</div>
            </div>
            <p className="footer__transfer">
               Услуги предоставляются ООО «Нэт Бай Нэт Холдинг» и ПАО «МегаФон» на территории присутствия операторов при
               наличии технической возможности. Выгода указана для тарифа «Объединяй! Для своих» по сравнению с тарифами
               операторов на аналогичные услуги при раздельном подключении. Подробности на megafon.ru
            </p>
            <p className="footer__policy">
               Продолжая использовать наш сайт, вы даете согласие на обработку файлов Cookies и других пользовательских
               данных, в соответствии с <a href="https://www.megafon.ru/ad/politika" target="_blank" rel="noreferrer">Политикой
               конфиденциальности</a>.
            </p>
            <div className="footer__speedtest">
               <img src={'/svg/speedtest-awards.svg'} alt="speedtest"/>
            </div>
         </div>
      </footer>
   )
}