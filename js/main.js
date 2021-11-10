// Stampare a schermo un messaggio all’interno di un h1, 
// utilizzando i data.

// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

var container = new Vue({
    el: '#container',
    data: {
        message: 'Hello World!!!',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/The_Earth_seen_from_Apollo_17.jpg/270px-The_Earth_seen_from_Apollo_17.jpg'
    }
});