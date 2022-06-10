import s from './SaleBanner.module.scss'

function SaleBanner( { className } ) {
   return (
      <div className={ `${ s.sale_banner } ${ className }` }>Скидка<br/>навсегда!</div>
   )
}

export default SaleBanner