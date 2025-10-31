// src/learning/data-generation
//faker.js
// import { faker } from "@faker-js/faker"; // ? Anglický faker
import { fakerCS_CZ as faker } from "@faker-js/faker"; // ? Český faker

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const username = faker.internet.username();
const email = faker.internet.email({
  firstName: firstName,
  lastName: lastName,
  provider: "seznam.cz",
});

console.log(firstName);
console.log(lastName);
console.log(username);
console.log(email);
