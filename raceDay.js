let raceNumber = Math.floor(Math.random() * 1000);
const registeredEarly = true;
let runnerAge = 25;
if (registeredEarly && runnerAge > 18) {
  raceNumber += 1000;
}

if (runnerAge > 18 && registeredEarly) {
  console.log(` Your number is ${raceNumber}. You will begin the race at 9:30am.`);
}
else if (runnerAge > 18 && !registeredEarly) {
  console.log(` Your number is ${raceNumber}. You will begin the race at 11:00am.`);
}

else if (runnerAge < 18) {
  console.log(` Your number is ${raceNumber}. You will begin the race at 12:30pm.`);
}
else{
  console.log(` Your number is ${raceNumber}. Please visit the registration desk.`)
};