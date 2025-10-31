// src/learning/objects/cars/
// cars.js

import { CarBlueprint } from "./car_blueprint.js";

const dieselCar = new CarBlueprint(
  "Červená",
  "1.6 TDI",
  "Diesel",
  "Diesel Auto"
);
dieselCar.logCarProperties();
dieselCar.color = "Šedá";
dieselCar.logCarProperties();

// ? Vytváříme novou instanci objektu, vznikne tím 2. auto (Ropák), zároveň ale bude stále existovat Diesel Auto
const petrolCar = new CarBlueprint("Žlutá", "1.0 TSI", "Benzín", "Ropák");
// ? Každý objekt je nezávislý na druhém a tímpádem každý samostatný objekt (instance) si drží své data
petrolCar.logCarProperties();
dieselCar.logCarProperties();

const electricCar = new CarBlueprint("Modrá", "EV 160kW", "Elektřina", "Blesk");
electricCar.logCarProperties();

petrolCar.repaint("Stříbrná");
// * Ověření, že je auto přebarvené
petrolCar.logCarProperties();
// * Ověření, že se přebarvilo jen petrolCar
electricCar.logCarProperties();

// ! Toto není vytvoření nového objektu, jen instanci přiřazuji do jiné proměnné
const pinkCar = electricCar; // ! Nový objekt vytváříme vždy pomocí klíčového slova new!
pinkCar.repaint("Růžová");
electricCar.logCarProperties();

console.log("Motor Ropáka: " + petrolCar.getEngine());
