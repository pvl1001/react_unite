import s from './FAQ.module.sass'
import { Accordion } from "react-bootstrap";


export default function FAQ( { data } ) {

   return (
      <section className={ s.container }>
         <div className="wrapper">
            <h1
               className={ s.title }
               data-view="block_faq">
               Дополнительная информация:
            </h1>

            <Accordion bsPrefix={ 'accordion ' + s.accordion }>
               { data.map( ( el, i ) => (
                  <div key={ i }>

                     { el.col.map( ( item, idx, arr ) => (
                        <div id={ `faq-${ i }-${ idx }` } key={ item.question }>

                           <Accordion.Item
                              eventKey={ i + '-' + idx }
                              bsPrefix="accordion__item"
                           >
                              <Accordion.Header bsPrefix="accordion__header">
                                 { item.question }
                              </Accordion.Header>

                              <Accordion.Body bsPrefix="card-body" dangerouslySetInnerHTML={ { __html: item.answer } }/>

                           </Accordion.Item>

                           { (i === 1 && idx === arr.length - 1) && (
                              <Accordion.Item eventKey={ i + '-' + idx } bsPrefix="accordion__item">
                                 <a href="https://help.home.megafon.ru/" style={ { color: "#333" } }>
                                    <Accordion.Header bsPrefix="accordion__header">
                                       Помощь и обслуживание клиентов
                                    </Accordion.Header>
                                 </a>
                              </Accordion.Item>
                           ) }
                        </div>
                     ) ) }
                  </div>
               ) ) }
            </Accordion>
         </div>
      </section>
   )
}