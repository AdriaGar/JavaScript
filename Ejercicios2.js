//Els exercicis següents realitza’ls en un fitxer .js diferent i que sigui referenciat al index.html
//6.- Donats un number i un BigInt ( 1.234 i 5.678 ), calcula les quatre operacions: suma, resta,
//divisió i multiplicació i mostra els resultats amb un sol decimal.
var num = 1234;
var num2 = 5678n

console.log((num + Number(num2)).toFixed(1))
console.log((num - Number(num2)).toFixed(1))
console.log((num * Number(num2)).toFixed(1))
console.log((num / Number(num2)).toFixed(1))
//7.- Calcula la hipotenusa d’un triangle on les longituds dels catets sigui de 4.
var catet1 = 4
var cater2 = 4
var hipotenusa = Math.sqrt((catet1 ^2) + (cater2 *2))
console.log('la hipoteniusa es : ' + hipotenusa);

//8.- Divideix un enter entre un String. Què retorna?
var enter = 5
var string = '5'
console.log(enter / string)

//9.- Donat un String amb el teu nom i cognoms, extreu el teu primer cognom, i mostra’l per pantalla
//indicant el número de caràcters que té.
var nombre = 'Adria Garcia Velasco'
var apellido1 = nombre.split(' ')[1]
var longitud = apellido1.length

console.log('El apellido ' + apellido1 + ' tiene ' + longitud + ' letras')
//10.- Donat un String amb el teu nom i cognoms, esborra el caràcter de la posició 6 i mostra el
//resultat per pantalla.
var nomComplet = "Adria Garcia Velasco";
var posicio = 6;

var resultat = nomComplet.slice(0, posicio) + nomComplet.slice(posicio + 1);

console.log("Resultat: " + resultat);

//11.- Declara una variable undefined i un null. Què passa si els sumes?
var var1 = null
var var2 = undefined
console.log(var1 + var2)
//12.- Realitza una coerció explícita i implícita d’un booleà a String.
let valorBoolea = true

let valorString = String(valorBoolea)
console.log(valorString)
console.log(typeof valorString)
//13.- Realitza una coerció explícita i implícita d’un String a booleà.
var str = "Hola";
if (str) {
    console.log("El string és veritat");
}

var str = "Hola";
var bool = Boolean(str);
console.log(bool); // true

//14.- Realitza una coerció explícita i implícita d’un booleà a Number.
var bool = true;
var num = bool + 0;
console.log(num); // 1

var bool = true;
var num = Number(bool);
console.log(num); // 1


