//creo il server Express
// importo express
const express = require('express')
// inizializzo express e lo salvo in una variabile
const app = express()
// definisco il numero di porta
const port= 4000

//definisco la prima rotta
app.get('/',(req,res)=>{
res.send('Server del mio blog')
})

//metto in ascolto il server alla porta indicata
app.listen(port,()=>{
    console.log(`il server è in ascolto presso la porta ${port}`); 
})