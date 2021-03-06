export const checkAddressPath = 'https://api.wifire.ru/api/address/check_dadata_address'
export const checkAddressAutocomplete = 'https://api.wifire.ru/api/address/check_address_dadata'
export const mailSenderPath = 'https://home.megafon.ru/form/mail-sender'
export const getAllTariffsPath = ( id = 1 ) => `https://home.megafon.ru/billing/bt/json/getalltarifs?city_id=${ id }`
export const ctRegisterPath = ( ct_site_id ) => `https://api.calltouch.ru/calls-service/RestAPI/requests/'${ ct_site_id }'/register/`
export const channelsPath = ( id ) => `https://home.megafon.ru/billing/bt/json/gettvchannelsbygroup?pack_id=${ id }`