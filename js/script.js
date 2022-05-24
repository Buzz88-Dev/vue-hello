// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.
// (va bene qualsiasi immagine che prendete dal web e/o avete e/o vi scaricate, è indifferente)

const root = new Vue({
    el : "#container",

    data : {
        stringa : "Vue Hello",

        immagine: "https://picsum.photos/200/300",

        altImg : "#"
    }
})