let exercise = 65
// Creo questa funzione perché scrivere tutte le volte 'console.log()' è una palla!
// uso la lettera 'w', che sta anche per 'write', perché è poco usata negli esercizi
const w = (param, param1) => {
  param1 ? console.log(`${param}`, param1) : console.log(param)
}

//
// Sposto sopra l'array per definirlo prima a usarlo poi negli esercizi
//
/* Questo array viene usato per gli esercizi. Non modificarlo. */

const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
]
console.log(movies)

/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/
console.log('Exercise: ', String.fromCharCode(exercise++))
const sum = 10 + 20
w(sum)

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/
console.log('Exercise: ', String.fromCharCode(exercise++))
const random = Math.floor(Math.random() * 21)
w(random)

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/
console.log('Exercise: ', String.fromCharCode(exercise++))
const me = { name: 'Lorenzo', surname: 'Lione', age: 50 }
w(me)

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/
console.log('Exercise: ', String.fromCharCode(exercise++))
delete me.age
w(me)

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/
console.log('Exercise: ', String.fromCharCode(exercise++))
const skills = ['JavaScript', 'Powershell', 'PHP', 'Assembler']
me.skills = skills
w(me)

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/
console.log('Exercise: ', String.fromCharCode(exercise++))
me.skills.push('C++')
w(me)

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/
console.log('Exercise: ', String.fromCharCode(exercise++))
me.skills.pop()
w(me)

// Funzioni

exercise = 1
/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('Exercise: ', exercise++)
const dice = () => Math.ceil(Math.random() * 6)
w(dice())

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/
console.log('Exercise: ', exercise++)
const whoIsBigger = (a, b) => Math.max(a, b)
w(whoIsBigger(7, 2))

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/
console.log('Exercise: ', exercise++)
const splitMe = (string) => string.split(' ')
w(splitMe('Questa frase viene slittata in un array.'))

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/
console.log('Exercise: ', exercise++)
const deleteOne = (string, bool) =>
  bool ? string.slice(1) : string.slice(0, -1) // E mi piace il codice compatto!
w(deleteOne('Stringa', true))
w(deleteOne('Stringa', false))

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/
console.log('Exercise: ', exercise++)
// Uso una regex essendo il valore di ingresso della funzione una stringa
// https://rswpthemes.com/how-to-remove-numbers-from-string-in-javascript/
const onlyLetters = (string) => string.replace(/\d/g, '')
w(onlyLetters('Questa stringa ha 1, 2, 3, 4 numeri... Anzi no!'))

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/
console.log('Exercise: ', exercise++)
// Ci sono decine di modi per verificare se una stringa è un indirizzo di mail valido.
// Alcuni molto elementari: verificano la sola presenza della @ nella stringa, o della @ e di un punto dopo /...@gmail . com
// Altri molto complessi: verificano la presenza di caratteri non consentiti, la lunghezza del domnio, la presenza di un
//                        dominio di terzo livello(es: .com, .it, info) che sia valido anche se ora però ne possono fare
//                        di nuovi tutti i giorni.
// Io userò una regEx e verificherò:
//  - la presenza di caratteri non validi;
//  - la presenza di una stringa prima della @
//  - che la stringa fornita abbia almeno 2 caratteri dopo l'ultimo punto
// Per la verifica ho usato il sito https://regex101.com
// Perché la regEx: pure essendo un modo apparentemente più complicato mi permette di fare quello che mi piace in efficenza, codice compatto.
const isThisAnEmail = (string) =>
  /^[a-z0-9.]{1,64}@[a-z0-9.]{3,64}[a-z0-9]{2}$/i.test(string)
w(isThisAnEmail('lorenz@lolloland.com')) // true
w(isThisAnEmail('nerio@yahoo.u')) // fale

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay
// Spettacolo! :))))
console.log('Exercise: ', exercise++)
const whatDayIsIt = () =>
  [
    'lunedì',
    'martedì',
    'mercoledì',
    'giovedì',
    'venerdì',
    'sabato',
    'domenica',
  ][new Date().getDay() - 1]
w(whatDayIsIt())

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/
console.log('Exercise: ', exercise++)
const rollTheDices = (rools) => {
  let sum = 0
  const values = []
  for (let i = 0; i < rools; i++) {
    let value = dice()
    sum += value
    values.push(value)
  }
  return { sum: sum, values: values }
}
w(rollTheDices(3))

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/
console.log('Exercise: ', exercise++)
// https://www.geeksforgeeks.org/how-to-calculate-the-number-of-days-between-two-dates-in-javascript/
// Fornisco la data su cui calcolare la differenza come se la aspetta JavaScript e non come la inserirei io (dd/mm/yyyy)
// Questo mi evita di doverla convertire dento la funzione. Inoltre non essendo specificato il formato in ingresso della funzione,
// ovvero Date o string, scelgo arbitratiamente.
// Siccome Date.Now() usa i milli secondi Unix Epoch uso .getTime e poi moltiplico per i secondi in un giorno
const howManyDays = (fromDate) =>
  (Date.now() - new Date(fromDate).getTime()) / (1000 * 60 * 60 * 24)
w(howManyDays('2024-01-01'))

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/
// Confronto mese e giorno di oggi con il mese e il giorno della data fornita (data di nascita)
// la funzione ritorna direttamente il risultato del confronto senza dover usare un ternario
console.log('Exercise: ', exercise++)
const isTodayMyBirthday = (birtdayDate) =>
  new Date().getMonth() === new Date(birtdayDate).getMonth() &&
  new Date().getDate() === new Date(birtdayDate).getDate()
w(isTodayMyBirthday('1974-09-07')) // False
// Verifica con la data di oggi
w(isTodayMyBirthday('2024-10-18')) // True

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('Exercise: ', exercise++)
// Oggetto di test
const object11 = { Title: 'Inception', Year: 2010 }
const deleteProp = (obj, string) => {
  delete obj[string]
  return obj // delete non ritorna nulla
}
w(deleteProp(object11, 'Title'))

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/
console.log('Exercise: ', exercise++)
const newestMovie = (movies) => {
  let newest = movies[0]
  movies.forEach((movie, i) => {
    if (movie.Year > newest.Year) {
      newest = movie
    }
  })
  return newest
}
w(newestMovie(movies))

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/
console.log('Exercise: ', exercise++)
const countMovies = (movies) => movies.length
w(countMovies(movies))

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/
console.log('Exercise: ', exercise++)
const onlyTheYears = (movies) => movies.map((movie) => movie.Year)
w(onlyTheYears(movies))

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('Exercise: ', exercise++)
const onlyInLastMillennium = (movies) =>
  movies.filter((movie) => movie.Year.slice(0, 2) === '19')
w(onlyInLastMillennium(movies))

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/
console.log('Exercise: ', exercise++)
const sumAllTheYears = (movies) =>
  movies.reduce((sum, movie) => sum + parseInt(movie.Year), 0)
w(sumAllTheYears(movies))

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/
console.log('Exercise: ', exercise++)
const searchByTitle = (searchFor, movies) =>
  movies.filter((movie) => movie.Title.search(searchFor) !== -1)
w(searchByTitle('Avengers', movies))

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/
console.log('Exercise: ', exercise++)
const searchAndDivide = (searchFor, movies) => {
  const match = movies.filter((movie) => movie.Title.search(searchFor) >= 0)
  const unmatch = movies.filter((movie) => movie.Title.search(searchFor) === -1)
  return { match: match, unmatch: unmatch }
}
w(searchAndDivide('Avengers', movies))

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/
console.log('Exercise: ', exercise++)
const removeIndex = (index, movies) => {
  movies.splice(index, 1)
  return movies
}
w(removeIndex(13, movies))

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/
console.log('Exercise: ', exercise++)
const container = document.getElementById('container')
w(container)

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/
console.log('Exercise: ', exercise++)
const getTD = () => {
  const tds = document.getElementsByTagName('td')
  return tds
}
w(getTD())

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/
console.log('Exercise: ', exercise++)
const printTDS = (tds) => {
  for (let i = 0; i < tds.length; i++) {
    w(tds[i].innerText)
  }
}
printTDS(getTD())

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/
console.log('Exercise: ', exercise++)
const redBackgroundForAllA = () => {
  const allA = document.getElementsByTagName('a')
  for (let i = 0; i < allA.length; i++) {
    allA[i].style.background = 'red'
  }
}
redBackgroundForAllA()

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/
console.log('Exercise: ', exercise++)
const addToMyList = (liText) => {
  const myList = document.getElementById('myList')
  const li = document.createElement('li')
  li.innerText = liText
  myList.appendChild(li)
}
addToMyList('Belgio')

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/
console.log('Exercise: ', exercise++)
const emptyLi = () => {
  const myList = document.querySelector('#myList')
  myList.innerHTML = ''
}
emptyLi()

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/
console.log('Exercise: ', exercise++)
const addClassToTDS = (tds) => {
  for (let i = 0; i < tds.length; i++) {
    tds[i].classList.add('test')
  }
}
addClassToTDS(getTD())

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/
console.log('Exercise: ', exercise++)
const halfTree = (levels) => {
  let levelSting = ''
  for (let i = 1; i <= levels; i++) {
    levelSting += '*'
    w(levelSting)
  }
}
halfTree(6)

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/
console.log('Exercise: ', exercise++)
const tree = (levels) => {
  // La'lgoritmo lavora dall'alto in basso, quindi ovviamente prima devo creare la sommità dell'albero e poi scendo man mano
  // Parto con un loop su tutto i livelli dal 1 (il più in alto) a quello più in basso (fornito da levels)
  // for (let level = 1; level <= levels; level++) {
  // // Prende un numero di spazi pari al livello (es 1) fino al numero dei livelli -1 (es 4)
  // let spacesString = ''
  // for (let spaces = level; spaces < levels; spaces++) {
  //   //spaces += j.toString() // check di controllo
  //   spacesString += ' '
  // }
  // // Prendo un numero di asterisci pari al doppio del numero dei livelli - 1
  // let asteriscsString = ''
  // for (let asteriscs = 1; asteriscs <= 2 * level - 1; asteriscs++) {
  //   asteriscsString += '*'
  // }
  // w(spacesString + asteriscsString)
  // }

  // ... e dopo aver scritto tutta questap pippa, ho scopert la funzione repeat!!!
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
  for (let level = 0; level <= levels; level++) {
    let spacesString = ''
    let asteriscsString = ''
    spacesString = ' '.repeat(levels - level + 1)
    asteriscsString = '*'.repeat(level * 2 + 1)
    w(spacesString + asteriscsString)
  }
}
tree(3)

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/
// la definizione di numero primo dice che un numero per essere tale deve essere divisibile solo per se stesso e per uno.
// Senza andare a scomodare la teoria dei numeri primi, uso l'algoritmo meno efficiente del mondo per calcolarlo, ovvero prendo 'n'
// e verifico se è divisibile per tutti i numeri più piccoli di lui.
console.log('Exercise: ', exercise++)
const isItPrime = (n) => {
  for (let i = 2; i < n; i++) {
    // w(i)
    if (n % i === 0) {
      return false
    }
  }
  return true
}
w(isItPrime(17))
