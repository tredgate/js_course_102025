// src/learning/timestamps
// moment.js
import moment from "moment";

const currentTime = moment();
console.log(`Aktuální čas a datum: ${currentTime}`);
const czechDateTime = moment().format("DD. MM. YYYY - HH:mm:ss");
console.log(`Český formát data a času: ${czechDateTime}`);
const onlyTime = moment().format("HH:mm");
console.log("Aktuální čas: " + onlyTime);

const tenDaysFutureDate = moment().add(10, "days").format("DD.MM.YYYY");
console.log("Deset dnů v budoucnosti: " + tenDaysFutureDate);

const threeMonthsAgo = moment().subtract(3, "months").format("DD/MM/YYYY");
console.log("3 měsíce v minulosti: " + threeMonthsAgo);
