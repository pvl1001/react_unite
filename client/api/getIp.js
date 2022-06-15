export default function getIp( req ) {
   try {

      if ( req.headers["x-forwarded-for"] ) {
         return req.headers["x-forwarded-for"].split( ',' )[0]
      }

      if ( req.headers["x-real-ip"] ) {
         return req.connection.remoteAddress
      }

      return req.connection.remoteAddress

   } catch ( err ) {
      console.log( err )
   }
}