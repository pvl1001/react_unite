const PORT = 4000
const express = require( 'express' )
const app = express()
const router = express.Router()
const cors = require( 'cors' )

app.use( cors() )
app.use( '/', router )

app.get( '/api/test', ( req, res ) => {
   res.json( 'test' )
} )


app.listen( PORT, () => console.log( `Сервер запущен http://localhost:${ PORT }` ) )
