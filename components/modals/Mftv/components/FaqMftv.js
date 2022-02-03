import {Accordion} from "react-bootstrap";
import {connect} from "react-redux";


function FaqMftv(props) {
   const faq = [
      {
         "question": "Как смотреть фильмы и сериалы из пакетов и сервисов, включённых в тариф «Объединяй!»?",
         "answer": "Для просмотра необходимо зарегистрироваться в <a target='_blank' href='https://megafon.tv/packages'>МегаФон ТВ</a>. Если вы используете мобильный интернет МегаФона, это произойдёт автоматически при входе. Если нет: <br> 1. Откройте <a target='_blank' href='https://megafon.tv'>сайт</a> или приложение «МегаФон ТВ». <br> 2. Введите номер телефона, на который подключён тариф «Объединяй!».  <br> 3. Задайте числовой пароль и введите код подтверждения из SMS. <br><br> Пакеты и сервисы, входящие в тариф, отображаются в разделе <a target='_blank' href='https://megafon.tv/packages'>Магазин</a>. Для просмотра выберите фильм или сериал и согласитесь с условиями использования сервиса — для Амедиатеки, START или more.tv."
      },
      {
         "question": "Если мой номер уже был зарегистрирован в МегаФон ТВ раньше, что будет после подключения на него тарифа «Объединяй!» с пакетами и сервисами?",
         "answer": "При подключении тарифа «Объединяй!» на этот же номер вам автоматически станут доступны пакеты и сервисы, включённые в тариф."
      },
      {
         "question": "На каких устройствах можно смотреть МегаФон ТВ с тарифом «Объединяй!»?",
         "answer": "Просмотр доступен: <br> — на приставках «МегаФон ТВ», Android TV и Apple TV; <br> — на телевизорах на базе Android TV, а также Samsung, LG и Philips с функцией Smart TV; <br> — на сайте <a target='_blank' href='https://megafon.tv'>МегаФон ТВ</a> и в приложении «МегаФон ТВ» для <a target='_blank' href='https://itunes.apple.com/ru/app/megafon.tv/id635898314?mt=8'>iOS</a> или <a target='_blank' href='https://play.google.com/store/apps/details?id=com.megalabs.megafon.tv'>Android</a>."
      },
      {
         "question": "Как подключить пакет или сервис, не входящий в тариф?",
         "answer": "Войдите в МегаФон ТВ, выберите нужный пакет или сервис. Далее перейдите на страницу пакета или сервиса, нажмите кнопку подключения и следуйте инструкциям."
      }
   ]

   function showModalOrder() {
      props.showModal({modal: 'order', bool: true})
      props.setDataOrder({
         tariffName: props.tariff.name,
         tariffId: props.tariff.tariffId,
         eventLabel: {
            order: `click_button_order_${props.tariff.dataView}`,
            send: `click_button_send_${props.tariff.dataView}`
         }
      })
   }


   return (
      <div className="mftv__faq wrapp">
         <h2 className="mftv__faq-title">Часто задаваемые вопросы</h2>

         <Accordion>

            {faq.map((el, i) => (
               <Accordion.Item key={el.question} eventKey={i} bsPrefix="accordion__item">
                  <Accordion.Header bsPrefix="accordion__header">{el.question}</Accordion.Header>
                  <Accordion.Body bsPrefix="card-body" dangerouslySetInnerHTML={{__html: el.answer}}/>
               </Accordion.Item>
            ))}

         </Accordion>

         <button
            type="button"
            className="mftv__faq-btn btn"
            data-view={`mftv_${props.tariff.id}_end`}
            onClick={showModalOrder}>
            Подключить
         </button>

      </div>
   )
}


export default connect(
   null,
   {}
)(FaqMftv)