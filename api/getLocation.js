export default async function getLocation( ip ) {
   const url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=";
   const token = "b6b5c860e47e70c098bf4d1cd5f5cb9af792d24d";

   const options = {
      method: "GET",
      mode: "cors",
      headers: {
         "Content-Type": "application/json",
         "Accept": "application/json",
         "Authorization": "Token " + token
      }
   }

   try {
      const response = await fetch( url + ip, options )
      return await response.json()
   } catch ( err ) {
      console.log( err )
   }
}
