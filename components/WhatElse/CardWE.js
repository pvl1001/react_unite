import Image from 'next/image'

function CardWE(props) {

   return (
      <div key={props.card.dataView} className="what-else__card card-what-else">

         <div className="card-what-else__img">
            <Image
               alt={props.card.alt}
               src={props.card.img}
               width={180}
               height={180}
            />
         </div>

         <h2 className="card-what-else__title" dangerouslySetInnerHTML={{__html: props.card.title}}/>

         {props.card.dataView !== 'vse'
            ? <p className="card-what-else__text" dangerouslySetInnerHTML={{__html: props.card.text}}/>
            : <p className="card-what-else__text">
               {props.card.text} <span className='link'
                                       onClick={props.showModalTariffAll}>акции</span>.
            </p>
         }

         <span
            className="card-what-else__link link"
            onClick={() => props.showModalOrder(props.card.dataView)}>
            Подключить
         </span>
      </div>
   )
}

export default CardWE