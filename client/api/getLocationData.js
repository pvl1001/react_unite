import axios from "axios";

export default async function getLocationData( location ) {
   return await axios.get( `https://${ location }.home.megafon.ru/billing/bt/json/getalltarifs` )
}