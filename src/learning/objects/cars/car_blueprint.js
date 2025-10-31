// src/learning/objects/cars
// car_blueprint.js

export class CarBlueprint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4;
    this.logDivider();
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel} \n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`
    );
    console.log("Auto je \"připravené\" a 'vhodné do provozu'");
  }

  logCarProperties() {
    this.logDivider();
    console.log(
      `Informace o autě "${this.carName}":\n\tbarva: ${this.color},\n\tmotor:${this.engine},\n\tpalivo: ${this.fuel}, \n\tpočet kol: ${this.wheels}`
    );
  }

  logDivider() {
    console.log("----------------------------------");
  }

  repaint(newColor) {
    const oldColor = this.color;
    this.color = newColor;
    this.logDivider();
    console.log(
      `Auto "${this.carName}" bylo přebarveno z "${oldColor}" na "${this.color}" `
    );
  }

  getEngine() {
    return this.engine; // ? Klíčové slovo return ukončuje běh metody, vše co je za ním se neprovede
    console.log("Toto se již nevypíše"); // ? Nevypíše se, protože je za return
  }
}
