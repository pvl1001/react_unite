import getIp from "../api/getIp";
import getAddress from "../api/getAddress";

export default async function getLocation() {
   const ip = await getIp()
   const { location } = await getAddress( ip )
   return location
}