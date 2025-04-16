// importo express
const express = require('express')
// inizializzo express e lo salvo in una variabile
const app = express()
// definisco il numero di porta
const port= 4000

//definisco la prima rotta
app.get('/',(req,res)=>{
console.log('Server del mio blog');
})

//creo la rotta bacheca
app.get('/bacheca', (req,res)=>{
    const myArray = [
        {
            titolo: 'ciambellone',
            contenuto: 'lorem ipsum',
            immagine: 'immagini/ciambellone.jpeg',
            tags: ['buono', 'gustoso','delizioso']
        },
        {
            titolo: 'cracker barbabietola',
            contenuto: 'lorem ipsum',
            immagine: 'immagini/cracker_barbabietola.jpeg',
            tags: ['friabile', 'super','aperitivo']
        },
        {
            titolo: 'pane fritto',
            contenuto: 'lorem ipsum',
            immagine: 'immagini/pane_fritto_dolce.jpeg',
            tags: ['dorato', 'ottimo','classico']
        },
        {
            titolo: 'pasta barbabietola',
            contenuto: 'lorem ipsum',
            immagine: 'immagini/pasta_barbabietola.jpeg',
            tags: ['saziante', 'fantastica','sfiziosa']
        },
        {
            titolo: 'torta paesana',
            contenuto: 'lorem ipsum',
            immagine: 'immagini/torta_paesana.jpeg',
            tags: ['tradizionale', 'indimenticabile','travolgente']
        }
    ];
    res.json(myArray);
})

//metto in ascolto il server alla porta indicata
app.listen(port,()=>{
    console.log(`il server è in ascolto presso la porta ${port}`); 
})