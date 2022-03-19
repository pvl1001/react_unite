export default async function getIp() {
   try {
      const response = await fetch( 'https://geolocation-db.com/json/' )
      const { IPv4 } = await response.json()
      return IPv4
   } catch ( err ) {
      console.log( err )
   }
}