import s from './Mark.module.sass'


export default function Mark( { mark } ) {

   let className = s.container
   if ( mark === 'Акция' ) className += ' ' + s.orange
   if ( mark === 'Только нужное' ) className += ' ' + s.blue
   if ( mark === 'Популярное' ) className += ' ' + s.fiolet


   return (
      <div className={ className }>
         <span>{ mark }</span>
      </div>
   )
}

