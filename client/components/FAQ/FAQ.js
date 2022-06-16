import s from './FAQ.module.sass';
import { Accordion } from "react-bootstrap";
import { connect } from 'react-redux';
import { useRouter } from 'next/router';


function FAQ( { data } ) {
   const { route } = useRouter()
   const lastAccordionItem = ( parentIdx, childIdx, arr ) =>
      parentIdx === 1 && childIdx === arr.length - 1 && route === '/'


   return (
      <section className={ s.container }>
         <div className="wrapper">
            <h1 className={ s.title }>Дополнительная информация:</h1>

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

                           { lastAccordionItem( i, idx, arr ) &&
                              <div className="accordion__item">
                                 <a href="https://help.home.megafon.ru/">
                                    <h2 className="accordion__header">
                                       <button
                                          type="button" aria-expanded="true"
                                          className="accordion-button collapsed">
                                          Помощь и обслуживание клиентов
                                       </button>
                                    </h2>
                                 </a>
                              </div>
                           }
                        </div>
                     ) ) }
                  </div>
               ) ) }
            </Accordion>
         </div>
      </section>
   )
}


export default connect( state => ({
   data: state.page.FAQ
}) )( FAQ )