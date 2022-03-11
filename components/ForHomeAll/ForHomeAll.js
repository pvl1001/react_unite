import s from './ForHomeAll.module.sass';
import BlockRange from "./BlockRange/BlockRange";


function ForHomeAll() {
   return (
      <section className={ s.container }>
         {/*{ { #with tariffVse } }*/ }
         <div className="wrapper">
            <div className={ s.text }>
               <h1 className={ s.title }>
                  Уже <span>с первого месяца</span> ваша скидка начнёт расти
               </h1>
               <p className={ s.desc }>
                  Подключив тариф { 'name' }, вам автоматически будет предоставлена скидка.
                  <br/>
                  &nbsp;Максимальная скидка составит 50% от
                  абонентской платы на домашний интернет и цифровое ТВ
               </p>
            </div>

            <BlockRange/>
         </div>
         {/*{ {/with}}*/ }
      </section>
   )
}

export default ForHomeAll

