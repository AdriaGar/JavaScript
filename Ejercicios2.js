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
//10.- Donat un String amb el teu nom i cognoms, esborra el caràcter de la posició 6 i mostra el
//resultat per pantalla.
//11.- Declara una variable undefined i un null. Què passa si els sumes?
//12.- Realitza una coerció explícita i implícita d’un booleà a String.
//13.- Realitza una coerció explícita i implícita d’un String a booleà.
//14.- Realitza una coerció explícita i implícita d’un booleà a Number.*/