class Utente {
    // Le parentesi racchiudono il codice della classe
    // Qui dichiariamo le proprietà e i metodi

    // Proprietà
    nome;
    cognome;
    tesseraNumero;

    // Per assegnare i valori alle proprietà ho bisogno di un costruttore.
    // Attraverso this. assegnerò un valore specifico dell'oggetto
    constructor(nome, cognome, tesseraNumero){
        this.nome = nome;
        this.cognome = cognome;
        this.tesseraNumero = tesseraNumero;
    }

    // Metodi
    presentazione() {
        console.log("Ciao! Mi chiamo " + this.nome + " e la mia tessera è " + this.tesseraNumero);
    }

}

// Crea un oggetto che è istanza della classe
let utente1 = new Utente("Mario", "D'araio", "0001");

// Posso usare anche const ma non posso piu cambiare i valori delle sue proprietà
const utente2 = new Utente("Carlo", "Verdi", "0002")

// Chiedo all'oggetto istanziato di eseguire il metodo di presentazione
//utente1.presentazione();
//utente2.presentazione();

// Creo una classe ancora piu generica per poter poi raggruppare studenti e professori
class Persona{
    nome;
    cognome;
    #isAlive = true; 
    // Gli assegno un valore di default e non sono costretto a passarlo al costruttore
    // Tuttavia così assumo che ogni istanza è con isAlive true;

    // Per ridurre la quantità di scrittura di codice se assgno isAlive in principio non ho bisogno di metterlo nel costruttore
    constructor(nome, cognome){
        this.nome = nome;
        this.cognome = cognome;
    }

    // Template literals: Mi permette di scrivere stringhe che contengono variabili
    // Per fare questo ho bisogno delle backtips: option+9: `
    presentazione() {
        console.log(`Ciao! Sono ${this.nome} ${this.cognome}`);

        if(this.isAlive){
            console.log("Eeeee sono vivo!");
        } else {
            console.log("Non sono piu  in vita!");
        }
    }

    // Getter per la variabile privata isAlive
    // Adesso con l'esistenza di questo get, nelle classi subordinate
    // posso accedere alla variabile isAlive anche se privata 
    // perché con il get accedo automaticamente al valore di isAlive
    get isAlive(){
        return this.#isAlive;
    }
}

const personaObj = new Persona("Ciccio","Pasticcio"); // Se metto false come terza proprietà non funziona
//personaObj.presentazione();

// Estendiamo lo studente a una persona -> Diventa classe super di studente
// Si può ereditare solo da una classe
// Extends sfrutta l'ereditarietà creando una sorta di gerarchia di classi
// Le classi genitrici vengono prima della classe che sta estendendo e quindi sono chiamate classi super.
// Ovvero stanno gerarchicamente sopra. => Studente è una sub classe di persona 
class Studente extends Persona {
    corso;
    matricola

    constructor(nome, cognome, corso, matricola){
        super(nome,cognome);
        this.corso = corso;
        this.matricola = matricola;
    }

    presentazione() {
        super.presentazione();
        console.log("Frequento il corso " + this.corso)
    }

    sostenereEsame(materia) {
        console.log("Oggi devo fare l'esame di " + materia) // Il this per materia non serve perché non è una proprietà di studente
    }
}

const studenteObj = new Studente("Pippo", "De Pippis", "5B","1539")
//studenteObj.presentazione();
//studenteObj.sostenereEsame("Analisi III");

class Professore extends Persona {
    materiaInsegnata;

    constructor(nome, cognome, materiaInsegnata){
        super(nome, cognome);
        this.materiaInsegnata = materiaInsegnata;
    }

    presentazione(){
        console.log("Buongiorno, mi chiamo " + this.nome + " " + this.cognome);
        console.log("Insegno " + this.materiaInsegnata);
        this.assegnareVoti();
    }

    assegnareVoti(){
        console.log("Ho corretto le verifiche di " + this.materiaInsegnata);
    }
}

const profObj = new Professore("Aristodemo", "De Magistris", "Filosofia");
//profObj.presentazione();
//profObj.assegnareVoti();

class Assistente extends Studente{
    assistito;

    constructor(nome, cognome, corso, matricola, assistito){
        super(nome, cognome, corso, matricola);
        this.assistito = assistito;
    }
}

const assistenteObj = new Assistente("Paolino", "Paperino", "4E", "M140230", profObj);
//assistenteObj.presentazione();
//assistenteObj.sostenereEsame("Matematica elementare");

//console.log(assistenteObj.assistito.cognome);



//const dirigenteObj = new Dirigente("Elon", "Musk", "Pianeta terra");
//const dipendenteObj = new Dipendente("Marco","Poosay", dirigenteObj);

//dirigenteObj.presentazione();
//dirigenteObj.licenziare();
//dirigenteObj.assumere();
//dipendenteObj.presentazione();
//dipendenteObj.lamentarsiDelCapo();

/*
All’interno di un’azienda abbiamo dei dirigenti, dei dipendenti e dei stagisti. Dirigenti e dipendenti hanno una tariffa oraria. Gli stagisti hanno un forfait mensile (non hanno un compenso orario, bensì un compenso mensile). I dirigenti hanno un bonus annuale del 30%.

Scrivere un metodo che calcoli lo stipendio mensile di dipendenti, dirigenti e stagisti
Scrivere un metodo che calcoli lo stipendio annuale di ciascuno.
*/


class Dipendente extends Persona{
    capo;

    constructor(nome, cognome, capo){
        super(nome,cognome);
        this.capo = capo;
    }

    lamentarsiDelCapo(){
        console.log(this.capo.cognome + "è uno stronzo");
    }
}

class Dirigente extends Dipendente{
    sezione;

    constructor(nome, cognome, sezione){
        super(nome,cognome);
        this.sezione = sezione;
    }

    assumere() {
        console.log("Bisogna fatturare di piu");
    }

    licenziare() {
        console.log("Bisogna tagliare le spese");
    }
}

class Impiegato extends Dipendente {
    capo;

    constructor(nome, cognome, capo){
        super(nome,cognome);
        this.capo = capo;
    }

    lamentarsiDelCapo(){
        console.log(this.capo.cognome + "è uno stronzo");
    }
}