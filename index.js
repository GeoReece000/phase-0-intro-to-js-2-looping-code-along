// Code your solutions in this file
for(let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(namesArray, eventName) {
  const cardsArray = [];

  for (let i = 0; i < namesArray.length; i++) {
    cardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`);
  }

  return cardsArray;
}

const names = ["Guadalupe", "Ollie", "Aki"]
const event = "surprise"

writeCards(names, event);


function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}



