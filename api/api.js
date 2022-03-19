export async function api( url, data ) {
   const formData = new FormData()

   for ( const key in data ) {
      formData.append( key, data[key] )
   }

   const response = await fetch( url, {
      method: 'POST',
      body: formData
   } )

   return await response.json()
}
