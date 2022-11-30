// Create the 2 numbers randomly(one for the user and the other for the AI)
let aiNumber = Math.floor(Math.random() * (7 - 1) + 1); // in range 1 to 6 =>  Math.floor(Math.random() * (max - min)) + min)
let userNumber = Math.floor(Math.random() * (7 - 1) + 1);  // with max exluded(this is why i put 7 as max and not 6)

//If user n > AI n => user win, 
//If user n < AI n => AI win,
//Else user n == A n => draw
if(aiNumber > userNumber)
    console.log(`Tu hai lanciato ${userNumber} e L'IA ha lanciato ${aiNumber}, quindi hai perso`);

else if(aiNumber < userNumber)
console.log(`Tu hai lanciato ${userNumber} e L'IA ha lanciato ${aiNumber}, quindi hai vinto`);

else
    console.log(`Entrambi avete lanciato ${userNumber}, quindi è pareggio`);