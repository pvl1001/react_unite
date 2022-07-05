import axios from "axios";
import { channelsPath } from "../api/paths";

export default function ( tariffs ) {
   const allTvId = Array.from( new Set(
      [
         ...Object.values( tariffs )
            .filter( tariff => tariff.tvId )
            .map( tariff => tariff.tvId )
      ] ) )
   const channelsPromises = allTvId.map( tvId => axios( channelsPath( tvId ) ) )
   return Promise.all( channelsPromises )
}