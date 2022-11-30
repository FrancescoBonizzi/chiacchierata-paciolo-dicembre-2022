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

const generaNumeroInteroCasuale = (minimoInclusivo, massimoEsclusivo) => 
     Math.floor(minimoInclusivo + Math.random() * massimoEsclusivo);
     
// Shuffle dell'array (Algoritmo Fisher-Yates) 
// https://bost.ocks.org/mike/shuffle/

const mescola = (array) => {

    let numeroElementiMescolabili = array.length;
  
    // Finché ci elementi da mescolare...
    while (numeroElementiMescolabili) {
  
      // Prendi un elemento rimasto...
      const indiceElementoCorrente = generaNumeroInteroCasuale(0, numeroElementiMescolabili);
      numeroElementiMescolabili--;

      // E scambialo con l'elemento corrente
      const indiceTemporaneo = array[numeroElementiMescolabili];
      array[numeroElementiMescolabili] = array[indiceElementoCorrente];
      array[indiceElementoCorrente] = indiceTemporaneo;

    }
  
    return array;
}

let alunniMescolati = mescola(alunni);

for (indiceAlunno = 0; indiceAlunno < alunniMescolati.length; indiceAlunno += 2) {

    if (indiceAlunno == alunniMescolati.length - 1) {
        console.warn(`${alunniMescolati[indiceAlunno]} è rimasto solo 😢`);
    } else {
        console.warn(`${alunniMescolati[indiceAlunno]} - ${alunniMescolati[indiceAlunno + 1]}`);
    }

}

