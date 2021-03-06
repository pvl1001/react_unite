import { api } from "../api/api";
import { ctRegisterPath, mailSenderPath } from "../api/paths";
import { analytic_id } from "../analytics/Analytics";


const errorResponse = {
   response_head: 'Сервис временно не доступен',
   response: 'Пожалуйста, свяжитесь с нами по телефону, либо попробуйте позднее'
}


export async function setRegister( eventLabel, dataOrder ) {
   const { calltracking_params, clientName, clientPhone, city, tariffId, tariffName, comment } = dataOrder
   if ( ym ) {
      ym( analytic_id, 'reachGoal', 'zayavka_megafon' )
      ym( analytic_id, 'reachGoal', eventLabel )
   }

   if ( calltracking_params ) {
      const ct_site_id = '37410'
      const ct_data = {
         fio: clientName,
         phoneNumber: clientPhone,
         email: '',
         subject: 'Заявка с сайта ' + city,
         tags: 'id' + tariffId + ',' + tariffName,
         comment,
         sessionId: calltracking_params
      }

      try {
         await api( ctRegisterPath( ct_site_id ), ct_data )
      } catch ( err ) {
         console.log( err )
         return errorResponse
      }
   }
}


export async function getMailSender( payload ) {
   const { clientName, clientPhone, city, clientAddress, house_guid, tariffId, tariffName, comment } = payload

   const dataOrder = {
      clientSite: location.host + location.pathname,
      form_name: 'express_form_ccmp_short',
      clientName,
      clientPhone,
      city,
      clientAddress,
      house_guid,
      tariffId,
      tariffName,
      comment,
      calltracking_params: ct( 'calltracking_params', 'g96m2c8n' )?.sessionId ?? '',
   }

   try {
      const response = await api( mailSenderPath, dataOrder )
      return { response, dataOrder }
   } catch ( err ) {
      console.error( err )
      return { response: errorResponse, dataOrder }
   }

}