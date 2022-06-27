import axios from "axios";
import { getAllTariffsPath } from "./paths";

export default async function getLocationData( location ) {
   return await axios.get( getAllTariffsPath(location) )
}