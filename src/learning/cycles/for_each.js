// src/learning/cycles
// for_each.js

const elements = ["Button", "Input", "Checkbox", "Dropdown"];

// ? Foreach používá šipkovou funkci pro získání prvků v rámci cyklené array. Musíme do ní poslat námi nazvaný parametr, kam se uloží vždy hodnota z array pro daný cyklus.
elements.forEach((element) => {
  console.log("Prvek array: " + element);
});
