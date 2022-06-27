export const checkAddressPath = 'https://api.wifire.ru/api/address/check_dadata_address'
export const checkAddressAutocomplete = 'https://api.wifire.ru/api/address/check_address_dadata'
export const mailSenderPath = 'https://home.megafon.ru/form/mail-sender'
export const getAllTariffsPath = ( location ) => `https://${ location }.home.megafon.ru/billing/bt/json/getalltarifs`
export const ctRegisterPath = ( ct_site_id ) => `https://api.calltouch.ru/calls-service/RestAPI/requests/'${ ct_site_id }'/register/`