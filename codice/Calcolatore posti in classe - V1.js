console.info('CALCOLATORE DI POSTI IN CLASSE');

const alunni = [
    "Donald",
    "Abdoul",
    "Caterina",
    "Domenico",
    "Damiano",
    "Manuela",
    "Chiara",
    "Leonardo",
    "Giovanna D'Arco"
];

const coppie = [];

const generaNumeroInteroCasuale = (minimoInclusivo, massimoEsclusivo) => 
     Math.floor(minimoInclusivo + Math.random() * massimoEsclusivo);

const rimuoviElemento = (array, indice) => 
    array.splice(indice, 1);

while (alunni.length > 0) {
    
    const indiceAlunno1 = generaNumeroInteroCasuale(0, alunni.length);
    const alunno1 = alunni[indiceAlunno1] ?? 'Nessuno';
    rimuoviElemento(alunni, indiceAlunno1);

    const indiceAlunno2 = generaNumeroInteroCasuale(0, alunni.length);
    const alunno2 = alunni[indiceAlunno2] ?? 'Nessuno';
    rimuoviElemento(alunni, indiceAlunno2);

    coppie.push([alunno1, alunno2]);
};

console.table(coppie);
