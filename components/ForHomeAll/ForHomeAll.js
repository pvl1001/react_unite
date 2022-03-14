import s from './ForHomeAll.module.sass';
import BlockRange from "./BlockRange/BlockRange";
import { useSelector } from 'react-redux'


function ForHomeAll() {
   const pageName = useSelector( state => state.page.name )
   const tariff = useSelector( state => state.tariffs.find( t => t.id === 'vse' ) )
   const name = `${ pageName } ${ tariff.name }`

   return (
      <section className={ s.container }>
         <div className="wrapper">
            <div className={ s.text }>
               <h1 className={ s.title }>
                  Уже <span>с первого месяца</span> ваша скидка начнёт расти
               </h1>
               <p className={ s.desc }>
                  Подключив тариф <b>{ name }</b>, вам автоматически будет предоставлена
                  скидка.
                  <br/>
                  &nbsp;Максимальная скидка составит 50% от
                  абонентской платы на домашний интернет и цифровое ТВ
               </p>
            </div>

            <BlockRange
               tariff={ tariff }
               name={ name }
               pageName={ pageName }
            />
         </div>
      </section>
   )
}

export default ForHomeAll

