const welcomeMessage = prompt('Welcome to Bottega coding Casino, Would you like a game?');
switch (welcomeMessage) {
  case "yes":
    alert( 'Wonderful, Today might be your lucky day') ;
    break;
  case "no":
    alert('See you next time!');
    break;
      

}

var text = ""
var i = 0;
let arrayBox = [];



const betting = prompt('How much would you to bet for your first slot game?');

do {
  console.log('test');
  const casinoAlgorithm = winRatio => {

  Object.keys(weights).forEach(key => {
      for (let i = 0; i < weights[key]; i++) {
          arrayBox.push(key);
      }
  })
  return arrayBox[(Math.random()* weights.length) | 0];
 


  }

  const winRatio = {
      lost: 1,
      won: 500
  }
}

  while (arrayBox <= 100);



