import getIp from "../api/getIp";
import getLocation from "../api/getLocation";

export default async function getRegion() {
   const ip = await getIp()
   const { location } = await getLocation( ip )
   return location?.data.region ?? 'Москва'
}