// Mostra un messaggio all'utente con un alert. Questo metodo è spesso utilizzato per notifiche semplici o in minima parte per debugging.
// alert('Ciao JavaScript');

// Utilizzo di document.writeln() per scrivere direttamente un messaggio alla fine del documento HTML.
// Nota: 'document' fa riferimento all'intero DOM della pagina.
// Questo metodo è poco utilizzato nelle pratiche moderne.
document.writeln('Ciao JavaScript, questo messaggio è mostrato con writeln');

// Iniettare un messaggio direttamente in un elemento specifico tramite il suo id.
// Recupero dell'id dal DOM e utilizzo della proprietà innerHTML per interpretare ed inserire contenuto HTML.
document.getElementById('subtitle').innerHTML =
    'Con JavaScript faremo diversi lavori, <strong>potenzieremo le nostre capacità logiche</strong>';


// Utilizzo di innerText per iniettare un messaggio testuale in un elemento specifico del DOM.
// A differenza di innerHTML, innerText non interpreta tag HTML ed è ideale per contenuto puramente testuale.
document.getElementById('subtitle-two').innerText =
    'JavaScript è un linguaggio interpretato, pensato inizialmente come linguaggio client-side, oggi usato anche lato server';


// pratica con proprieta innerHTML e innerText
document.getElementById('programmazione').innerHTML =
    '<strong>Linguaggio di programmazione : </strong> Si tratta di un linguaggio formale, costituito da simboli che rispetta delle regole sintatiche grammaticali e semantiche, dove scriviamo istruzioni in uscita per restituire qualcosa in entrata '

document.getElementById('interpretato').innerHTML =
    '<strong>Linguaggio interpretato : </strong> Il codice viene letto ed eseguito linea per linea, senza un passaggio intermedio di compilazione';

document.getElementById('compilato').innerHTML =
    '<strong>Linguaggio compilato : </strong> Il codice sorgente viene prima trasformato in un file eseguibile, e successivamente eseguito';



// Attività di debugging: individuare il difetto che genera un errore e impedisce il corretto funzionamento del codice
// console.log() è uno degli strumenti più efficaci per il debugging, poiché permette di visualizzare variabili, oggetti e il flusso del codice durante l'esecuzione
// Ci consente di visualizzare qualsiasi tipo di dato, come stringhe, numeri, oggetti e altro, direttamente nella console dell'Inspector del browser
console.log('Prova della console');
console.log(1);
console.log(document);
console.log(document.getElementById('subtitle'));

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Variabili
// Le variabili in JavaScript possono essere definite utilizzando tre parole chiave: const, let e var.
// Ognuna di queste conferisce alla variabile caratteristiche specifiche. Ecco alcune regole generali per nominare una variabile:

// 1 - I nomi delle variabili devono essere descrittivi e spiegare chiaramente cosa rappresentano.
// 2 - I nomi delle variabili non devono iniziare con numeri o caratteri speciali.
// 3 - I nomi delle variabili non possono contenere spazi o caratteri speciali (ad esempio, !, @, #).
// 4 - I nomi delle variabili dovrebbero essere scritti in minuscolo, con parole separate da underscore (snake_case) o utilizzando il formato CamelCase.
// 5 - Utilizzare `camelCase` (es. `nomeVariabile`) per variabili composte da più parole è una convenzione comune in JavaScript.
//    In alternativa, puoi usare `snake_case` (es. `nome_variabile`) per separare le parole con un underscore.



// Variabile const: dichiarazione di una variabile che non può essere riassegnata dopo l'inizializzazione. È una variabile "costante".
// La variabile const deve essere dichiarata ed inizializzata sulla stessa riga.
const first_word = 'Variabile costante'; // Dichiarazione ed inizializzazione
console.log(first_word); // Stampa il valore iniziale della variabile

// Tentativo di riassegnare un nuovo valore alla variabile 'first_word', che è stato dichiarato con 'const'.
// Questo genera un errore, perché le variabili dichiarate con 'const' non possono essere riassegnate.
// first_word = 'Ma sei davvero una costante ?'; Errore: TypeError: Assignment to constant variable.



// Variabile let : Dichiara una variabile che puo essere riassegnata (modificata in seguito)
// Nella variabile let non è d'obbligo che dichiarazione ed inizializzazione vengano fatte sulla stessa riga, ma e buona prassi fare sempre sulla stessa riga di codice
let second_word; // Dichiarazione della variabile let
second_word = 'Variabile let'; // Inizializzazione della variabile let
console.log(second_word); // Stampo in console il valore della variabile let


let third_word = 'Dichiarazione ed inizializzazione'; // Dichiarazione ed inizializzazione nella stessa riga (buona prassi)
console.log(third_word); // Stampo in console il valore della variabile third_word


second_word = 'Riassegnazzione valore alla variabile second_word'; // il valore precedente viene sovrascritto, ritornando quindi al concetto la variabile può contenere un solo valore
console.log(second_word); // Stampo in console il valore della variabile let riassegnato


// Variabile var: Ha un comportamento simile a let, ma presenta alcuni svantaggi.
// - Può essere dichiarata più volte con lo stesso nome, il che può portare a errori difficili da individuare.
// - È soggetta a hoisting: la dichiarazione viene spostata in cima al contesto di esecuzione, ma il valore sarà undefined fino alla sua inizializzazione.
// - Ha uno scope di funzione anziché uno scope di blocco, rendendola meno sicura e meno prevedibile rispetto a let e const.

console.log(VariabileVar); // risultato in console undefined
VariabileVar = 'Inizializzata prima della dichiarazione sono soggetta ad hoisting';
var VariabileVar;

// facciamo il confronto con let

// console.log(VariabileLet); genera errore in console
// let VariabileLet;
// VariabileLet = 'Prova';

// ---------------------------------------------------------------------------------------------------------

// Un po di pratica con le variabili

let my_string = 'Questa è una stringa assegnata a una variabile let iniettata nel dom'; // dichiarazione ed inizializzazione 
document.getElementById('first_string').innerText = my_string; // assegnato il valore di my string



let full_string = my_string; // assegno il valore della variabile my_string alla variabile full_string (riassegnazione)
console.log(full_string); // stampo in console il valore della variabile full_string

document.getElementById('second_string').innerText = full_string; // assegno il valore della variabile full_string e con la funzione getElementById lo inietto nel dom all' elemento con id second_sting


// vediamo un esempio di concatenazione tra stringhe con il simbolo (+)

let first_name = 'Roberto';
let second_name = 'Ledda';
console.log(first_name + ' ' + second_name); // stampo in console con la concatenazione i valori delle variabili first_name + second_name

document.getElementById('full-name').innerText = first_name + ' ' + second_name; // eseguo sempre una concatenzazione in questo caso lo mostro a video recuperando l'elemento full-name


// Tecnica del template literal

document.getElementById('template-literal').innerText = `${first_name} ${second_name}`; // utilizzo del template literal, con i backtik e ${} sintassi


// con le stringhe il simbolo (+) diventa operatore di concatenazione, ma il simbolo (+) comunemente lo utilizziamo per sommare dei valori (numeri interi)
// Vediamo l'addizione in JS

let x = 10;
let y = 5;

// vediamo possibili operazioni
let somma = x + y; // ricordiamo che l'operatore somma diventa di concatenazione in caso almeno uno dei 2 valori è stringa
let diff = x - y;
let molt = x * y;
let div = x / y;
let rest = x % y; // operatore resto (resto rimanente dall'operazione della divisione)

console.log(somma);
console.log(diff);
console.log(molt);
console.log(div);
console.log(rest);

let results =
    `${x} + ${y} = ${somma}\n` +
    `${x} - ${y} = ${diff}\n` +
    `${x} * ${y} = ${molt}\n` +
    `${x} / ${y} = ${div}\n` +
    `${x} % ${y} = ${rest}\n`

document.getElementById('results').innerText = results;


// vediamo il prompt

// let name = prompt('Inserisci il tuo nome');
// let surname = prompt('inserisci il cognome');
// let year = prompt('inserisci il tuo anno di nascita');
// let age = 2024 - year;
// console.log(`${name} ${surname}`);
// console.log(age);

// document.getElementById('text-full-name').innerText = `Di seguito il tuo nome e cognome = ${name} ${surname}`;
// document.getElementById('age').innerText = `Di seguito la tua età = ${age}`;



// -------------------------------------------------------------------------------------------------------------------------------------------
// esercizi di pratica :


// Creazione e stampa di variabili

// Dichiarare tre variabili: nome, cognome e eta. 
// Inizializzarle con il tuo nome, cognome e la tua età.
// Stampare una frase descrittiva sia in console che nella pagina.

// dichiaro le tre variabili nome, cognome ed età.
let nome = 'Roberto';
let cognome = 'Ledda';
let eta = 30; // numero intero il template literal che utilizzo di sotto converte automaticamente in numeri in stringa
// stampo il risultato in console, utilizzando il template literal
console.log(`${nome} ${cognome} ${eta}`);
// stampo il risultato nella pagina
document.getElementById('ex-one').innerText = `Mi chiamo ${nome} ${cognome} e ho ${eta} anni`;


// Riassegnazione di variabili

// Dichiarare una variabile con let e assegnarle un valore numerico.
// Modifica il valore della variabile e stampalo due volte: prima e dopo la modifica.

// dichiaro variabile let a cui assegno un valore numerico 
let numero = 20;
// stampo in console il valore della variabile numero
console.log(numero);

// assegno un nuovo valore alla variabile numero 
numero = 25;
// stampo in console il nuovo valore della variabile numero
console.log(numero);



// Uso di const

// Dichiarare una costante con il valore di 15.
// Prova a riassegnare il valore e osserva l'errore generato in console.

const valore_uno = 15;
console.log(valore_uno);


// valore_uno = 3;
// console.log(valore_uno);
// script.js:212  Uncaught TypeError: Assignment to constant variable.
// at script.js:212:12


// Concatenazione di stringhe

// Crea due variabili, saluto con il valore "Ciao" e nomeUtente con il valore di un nome.
// Stampa in console un messaggio come: "Ciao, NomeUtente!" utilizzando la concatenazione.

// dichiaro variabile let saluto con tipo dato stringa
let saluto = 'Ciao,';
// dichiaro variabile let nome_utente con tipo dato striga
let nome_utente = 'Roberto';

// stampo in console concatenando i valori delle variabili dichiarate in precedenza
console.log(saluto + ' ' + nome_utente);
// in alternativa utilizzo il template literal
console.log(`${saluto} ${nome_utente} template literal`);
// stampo in pagina i valori delle variabili saluto e nome_utente, utilizzo il template literal e la proprietà .innerHTML che interpreta codice HTML
document.getElementById('hello').innerHTML = `${saluto} <strong>${nome_utente}</strong>`


// Esercizio con operazioni matematiche

// Crea tre variabili: num1, num2 e somma.
// Assegna due numeri a num1 e num2 e calcola la loro somma memorizzandola in somma.
// Stampa il risultato in console.

// dichiaro 2 variabili a cui assegno 2 valori numerici interi
let num_one = 50;
let num_two = 20;

// dichiaro una variabile operazione_somma a cui assegno la somma di numer_one + number_two
let operazione_somma = num_one + num_two;
// stampo in console il valore della variabile operazione_somma
console.log(operazione_somma);


// Uso di variabili non inizializzate

// Crea una variabile con let senza inizializzarla.
// Prova a stamparla in console prima di assegnarle un valore.
// Assegna un valore e stampala nuovamente.

// faccio solo la dichiarazione di una variabile let senza inizializzarla
let inizializzata;
// provo a stampare in console ma il risultato sarà undefined
console.log(inizializzata);

// inizializzo la variabile assegnando un dato tipo stringa
inizializzata = 'Ok adesso è inizializzata';
// stampo il risultato in console
console.log(inizializzata);


// Uso di template literals

// Crea tre variabili: prodotto, prezzo, e quantita.
// Calcola il costo totale del prodotto e stampa una frase come: "Hai acquistato 3 mele per un totale di 6 euro." utilizzando i template literals.


// dichiaro la variabile prodotto a cui assegno dato stringa
let prodotto = 'mele';
// dichiaro variabile prezzo a cui assegno un valore numerico che rappresenta il costo di una singola mela
let prezzo = 2;
// con l'utilizzo del prompt chiedo all'utente di inserire la quantità di mele che vuole acquistare
let quantita = parseInt(prompt('Inserisci quante mele vuoi acquistare'), 10); // parseInt converte il valore inserito dall'utente che è stringa in valore numerico il 10 alla fine rappresente il radix (base numerica) ovvero stiamo utilizzando il sistema decimale
// dichiaro una variabile a cui assegno la moltiplicazione tra il prezzo di una singola mela e la quantià
let molt_prezzo_quantità = prezzo * quantita;
// stampo in console con il template literal la quantità di mele acquistate e il costo totale
console.log(`Hai acquistato ${quantita} mele per un totale di ${molt_prezzo_quantità} euro`);
// stampo in pagina il risultato dell'operazione
document.getElementById('price').innerText = `Hai acquistato ${quantita} mele per un totale di ${molt_prezzo_quantità} euro`;













