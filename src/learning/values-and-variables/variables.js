// src/learning/values-and-variables
// variables.js
// ! POZOR, JavaScript je case-sensitive, citlivý na velikosti písmen - firstName není to samé jako FirstName
let firstName = "Petr"; // ? Deklarace a inicializace proměnné (vytváříme proměnnou a ukládáme do ní hodnotu)
let lastName; // ? Pouze deklarace proměnné (hodnota je nastavená na undefined)
lastName = "Fifka"; // ? Pouze inicializace proměnné - už nepoužívám klíčové slovo let

console.log(firstName); // ? Vypíše hodnotu proměnné firstName
console.log(firstName + " " + lastName); // ? Sloučení stringů, + je slučovací operátor, mezeru musíme přidat mezi texty, protože jinak by výsledek byl: PetrFifka

firstName = "Alžběta"; // ? Reinicializace proměnné (přiřazujeme jinou hodnotu)
console.log(firstName); // ? Výsledek: Alžběta, ukázka vícenásobného použití proměnné
console.log(firstName);
console.log(firstName);

// * Typy proměnných a jejich vlastnosti
// ? var se deklaruje pro modul (zjedn. soubor)
{
  var city = "Praha";
  console.log("Město v bloku: " + city);
}
console.log("var mimo blok: " + city); // ! Toto není dobrá vlastnost proměnné: můžou vznikat duplicitní proměnné, může být problém s pojmenováváním atp.

var river = "Vltava";
var river = "Dunaj"; // ! Redeklarace - můžu si omylem přepsat proměnnou
console.log(river);

var street;
street = "Nová"; // ? Oddělená deklarace a inicializace

street = "Dlouhá"; // ? reinicializace

// * let proměnná
// ? let se definuje pro blok - existuje jen uvnitř bloku
{
  let country = "česko";
  console.log("let uvnitř bloku: " + country);
  console.log(firstName); // ? Uvnitř bloku kódu můžeme volat proměnné, které jsou mimo (zvenku dovnitř)
}
// console.log(country); // ! Proměnná let country neexistuje mimo blok kódu, kde byla deklarována, spuštění způsobí chybu: ReferenceError: country is not defined

// ? let nemůžeme redeklarovat:
let car = "Škoda";
// let car = "Tesla"; // ! Nemůžu redeklarovat

// * const proměnná
const continent = "Evropa"; // ? Musíme deklarovat i inicializovat zároveň
// continent = "Asie"; // ! NELZE, způsobí chybu: TypeError: Assignment to constant variable.
// ? const se definuje pro blok - existuje jen uvnitř bloku
{
  const username = "petr";
  console.log("const uvnitř bloku: " + username);
}
//console.log("const mimo blok: " + username); // ! Proměnná const username neexistuje mimo blok kódu, kde byla deklarována, spuštění způsobí chybu: ReferenceError: username is not defined

// const password; // ! Nelze, const musím vždy inicializovat při deklaraci.

/*
 Více
 řádková
 poznámka
*/

/**
 * Toto je dokumentace funkce
 * Umíme ji formátovat, například **tučně**
 *
 * Dá se zde vkládat kód:
 * ``` javascript
 * console.log("hello world");
 * ```
 */
function test() {}
