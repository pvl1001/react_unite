import s from './Header.module.scss'


function Header() {

   return (
      <header className={ s._ + " wrapper" }>
         <div className={ s.container }>
            <div className={ s.text }>
               <h1 className={ s.title }>
                  Мобильная связь, домашний интернет и ТВ со скидкой до 50%
               </h1>
               <p className={ s.description }>
                  Подключай тарифы «Объединяй» и «ДляДома», переводи на них своих друзей и оплачивай половину стоимости
                  услуг
                  связи!
               </p>
               <p className={ s.price }>от <b>275 ₽</b> в месяц</p>
            </div>
         </div>
      </header>
   )

}


export default Header