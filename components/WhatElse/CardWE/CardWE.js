import s from './CardWE.module.sass'
import Image from 'next/image'

function CardWE( props ) {

   return (
      <div key={ props.card.dataView } className={ s.container }>

         <div className={ s.img }>
            <Image
               alt={ props.card.alt }
               src={ props.card.img }
               width={ 180 }
               height={ 180 }
            />
         </div>

         <h2
            className={ s.title }
            dangerouslySetInnerHTML={ { __html: props.card.title } }
         />

         { props.card.dataView !== 'vse'
            ? <p className={ s.text } dangerouslySetInnerHTML={ { __html: props.card.text } }/>
            : <p className={ s.text }>
               { props.card.text } <span className="link"
                                         onClick={ props.showModalTariffAll }>акции</span>.
            </p>
         }

         <span
            className={ 'link ' + s.link }
            onClick={ () => props.showModalOrder( props.card.dataView ) }>
            Подключить
         </span>
      </div>
   )
}

export default CardWE