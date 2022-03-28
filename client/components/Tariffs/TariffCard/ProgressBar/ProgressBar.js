import s from './ProgressBar.module.sass'


export default function ProgressBar( props ) {

   return (
      <div className={ s.container }>

         <div className={ s.text }>
            <p className={ s.text__name } dangerouslySetInnerHTML={ { __html: props.pb.title } }/>
            <p className={ s.text__value } dangerouslySetInnerHTML={ { __html: props.pb.value } }/>
         </div>

         <div className={ s.line }>
            <div style={ props.lineStyle }
                 className={ s.line_active }/>
         </div>

      </div>
   )

}

