import axios from "axios";
import { getAllTariffsPath } from "./paths";

export default async function getLocationData( city_id ) {
   return await axios.get( getAllTariffsPath( city_id ) )
}