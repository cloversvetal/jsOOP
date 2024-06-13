/*
All’interno di un’azienda abbiamo dei dirigenti, dei dipendenti e dei stagisti. 
Dirigenti e dipendenti hanno una tariffa oraria. 
Gli stagisti hanno un forfait mensile (non hanno un compenso orario, bensì un compenso mensile). 
I dirigenti hanno un bonus annuale del 30%.
SOLO I DIRIGENTI HANNO UNA SEZIONE CHE DIRIGONO
SOLO GLI IMPIEGATI E GLI STAGISTI HANNO UN CAPO
Scrivere un metodo che calcoli lo stipendio mensile di dipendenti, dirigenti e stagisti
Scrivere un metodo che calcoli lo stipendio annuale di ciascuno.
*/


class Dipendente {
    nome;
    cognome;
    tariffaOraria;

    constructor(nome, cognome, tariffaOraria){
      this.nome = nome;
      this.cognome = cognome;
      this.tariffaOraria = tariffaOraria;
    }

    presentazione() {
        console.log("Ciao! Mi chiamo " + this.nome + " e la mia tessera è " + this.tesseraNumero);
    }

    calcolaStipendioMensile(){
        return this.tariffaOraria * 20 * 8;
    }

    calcolaStipendioAnnuale(){
        return this.calcolaStipendioMensile() * 12;
    }
}

class Dirigente extends Dipendente{
    sezione;
    bonusAnnuale;

    constructor(nome, cognome, tariffaOraria, sezione, bonusAnnuale){
        super(nome, cognome, tariffaOraria);
        this.sezione = sezione;
        this.bonusAnnuale = bonusAnnuale; // Numero che corrisponde alla percentuale
    }

    calcolaStipendioAnnuale(){
        let noBonus = super.calcolaStipendioAnnuale();
        let bonus = (noBonus * this.bonusAnnuale)/ 100;
        return noBonus + bonus;
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

    constructor(nome, cognome, tariffaOraria, capo){
        super(nome,cognome, tariffaOraria);
        this.capo = capo;
    }

    lamentarsiDelCapo(){
        console.log(this.capo.cognome + "è uno stronzo");
    }
}

class Stagista extends Impiegato {
    forfait;

    constructor(nome, cognome, capo, forfait, tariffaOraria = 0) {
        //
        super(nome, cognome, tariffaOraria, capo);
        this.forfait = forfait;
    }

    calcolaStipendioMensile(){
        if (this.tariffaOraria == 0){
            return this.forfait;
        } else {
            return super.calcolaStipendioMensile;
        }

    }

}


const obj1 = new Dirigente ("Elun", "Musk", 40, "Marketing", 35);
const obj2 = new Impiegato("Mario", "Rossi", 7.5, "Pippo");
const obj3 = new Stagista("Povero", "Tapino", "Pippo", 500);

let dipendenti = [obj1, obj2, obj3];

for (let index = 0; index < dipendenti.length; index++) {
    console.log(dipendenti[index].nome + " guadagna " + obj1.calcolaStipendioMensile() + " euro al mese");
    console.log(dipendenti[index].nome + " guadagna " + obj1.calcolaStipendioAnnuale() + " euro al mese");

}

/*
console.log(obj1.nome + " guadagna " + obj1.calcolaStipendioMensile() + " euro al mese")
console.log(obj1.nome + " guadagna " + obj1.calcolaStipendioAnnuale() + " euro all'anno")

console.log(obj2.nome + " guadagna " + obj2.calcolaStipendioMensile() + " euro al mese")
console.log(obj2.nome + " guadagna " + obj2.calcolaStipendioAnnuale() + " euro all'anno")

console.log(obj3.nome + " guadagna " + obj3.calcolaStipendioMensile() + " euro al mese")
console.log(obj3.nome + " guadagna " + obj3.calcolaStipendioAnnuale() + " euro all'anno")
*/