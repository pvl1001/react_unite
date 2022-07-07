export function setAdvcakeData( id ) {
   window.advcake_data = window.advcake_data || []
   window.advcake_data.push( {
      pageType: 6,
      user: {
         email: '',
         type: ''
      },
      leadInfo: {
         id,
         name: `Заявка`,
         totalPrice: 0,
         leadid: '',
         coupon: ''
      }
   } )
}

export function postRegister( data ) {
   const ct_site_id = '37410'

   $.ajax( {
         url: 'https://api.calltouch.ru/calls-service/RestAPI/requests/' + ct_site_id + '/register/',
         dataType: 'json',
         type: 'POST',
         data
      }
   )
}