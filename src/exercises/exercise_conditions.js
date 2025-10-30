const actualPoints = 75;
const graduationLimit = 75;
const studentName = "Lenka Výborná";

if (actualPoints >= graduationLimit) {
  console.log(
    `Student/ka ${studentName} úspěšně absolvoval/a s ${actualPoints} body`
  );
} else {
  console.log(
    `Student/ka ${studentName} neabsolvoval/a s ${actualPoints} body, minimum bylo: ${graduationLimit}. Chybělo mu/jí ${
      graduationLimit - actualPoints
    } bodů.`
  );
}
