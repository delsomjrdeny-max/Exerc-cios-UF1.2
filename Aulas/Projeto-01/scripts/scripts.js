/*
  variaveis:
    - let
    - const
*/

let nome = "Erik"; // string
let idade = 22; // number
let estaPresente = true; //bollean (true ou false)
let altura = 1.73; // number (float)

let nota; //undefiend
let media = null; // valor intencional de vazio

const morada = "assomada"; //string

nome="maria";
idade = 28;
// morada ="street"; // nao e possivel alterar uma const

console.log("Meu nome e:" + nome, "minha idade: " +idade);
console.log("minha morade e: " + morada);

console.log(typeof nome); //tipo de dados de vareavel nome 

let nomeCafe = "Capuccino";
let preco = 250;
let quantidade;



let total = 0;
total = preco * quantidade;

console.log(nome + "pediu" + quantidade + "" + nomeCafe )
console.log("O total a pagar e de " + total + "escudos.");
