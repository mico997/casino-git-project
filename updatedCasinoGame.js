console.log("Welcome to Bottega coding games");
console.log("Here are the game rules");
console.log("The minimum bet acceptable is 500");
console.log("You have 5 max total bets")


const welcomeMessage = prompt('Would you like a game?');
const walletChecker = 500;
if (welcomeMessage === 'yes') {
  console.log( 'Wonderful, Today might be your lucky day') ; 
  
} 
else {
  console.log("Sorry, Try Again Next Time") 
  
}  

let wallet = 0;
const betting = prompt('How much would you like to bet?');
wallet += betting
let addedWallet;

walletAuthenticator: if (betting >= walletChecker)  {
  console.log('You are ready to Begin');
} else {
  break walletAuthenticator;
 
}


const addWallet = prompt('You dont have enough money in your wallet! Would you like to add more money?')

if (addWallet === 'yes'){
  addedWallet = prompt('you will need to add more money to your wallet. Note: Your wallet must exceed $500. How much will you like to add?')
  const newWallet= wallet + addedWallet;
  console.log(newWallet);
}

















 