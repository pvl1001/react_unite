import s from './Mark.module.sass';
import { useRouter } from 'next/router';


export default function Mark( { mark } ) {
   const router = useRouter()

   const markColor = () => {
      switch ( mark ) {
         case 'Акция':
            return router.route === '/internet'
               ? s.orange_light
               : s.orange
         case 'Только нужное':
            return s.blue
         case 'Самый быстрый':
            return s.blue
         case 'Популярное':
            return s.fiolet
         default:
            return s.orange
      }
   }


   return (
      <div className={ `${ s.container } ${ markColor() }` }>
         <span>{ mark }</span>
      </div>
   )
}

