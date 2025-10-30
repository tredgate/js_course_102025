// src/learning/values-and-variables
// values.js

// * Seznam hodnot primitivních datových typů - různé hodnoty a jejich zápis
console.log("String"); // ? Textová hodnota je typ string (řetězec)
console.log('Použití apostrofů když potřebujeme použít "uvozovky" v textu'); // ? Hodnota string
console.log(`Template literal - speciální zápis stringů`); // ? Zpětný apostrof na Windows: pravý ALT + ý; Na macu je to samostatná klávesa, většinou umístěná vedle enteru
console.log(25); // ? Typ: number (číslo), píše se vždy bez uvozovek!!
console.log(25.45); // ? Desetinná čísla se píší s desetinnou tečkou
// ! Čísla jsou vždy bez uvozovek, jinak může nastat problém:
console.log("1" + "12"); // ? Výsledek: "112", operátor + slučuje stringy dohromady
console.log(1 + 12); // ? Výsledek: 13 - správný výpočet
console.log(true); // ? boolean - logická hodnota, PRAVDA
console.log(false); // ? boolean - logická hodnota, NEPRAVDA
console.log(undefined); // ? Prázdná hodnota (nenaplněná)
console.log(null); // ? Prázdná hodnota
