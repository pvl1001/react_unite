import s from './Banner.module.sass'
import Image from 'next/image';


function Banner( props ) {

   return (
      <div className={ `${ s.container } ${ s[props.banner.id] }` }>

         <div className={ s.img }>
            <Image
               alt={ props.banner.alt }
               src={ `/images/almond/${ props.banner.img }.webp` }
               layout={ 'fill' }
               objectFit={ 'contain' }
               objectPosition={ 'bottom' }
            />
         </div>

         <div className={ s.text }>
            <h3 dangerouslySetInnerHTML={ { __html: props.banner.title } }/>
            <p>{ props.banner.text }</p>
         </div>

      </div>
   )
}


export default Banner