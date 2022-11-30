let aiNumber = Math.floor(Math.random() * (7 - 1) + 1); // in range 1 to 6 =>  Math.floor(Math.random() * (max - min)) + min)
let userNumber = Math.floor(Math.random() * (7 - 1) + 1); 

if(aiNumber > userNumber)
    console.log(`Tu hai lanciato ${userNumber} e L'IA ha lanciato ${aiNumber}, quindi hai perso`);

else if(aiNumber < userNumber)
console.log(`Tu hai lanciato ${userNumber} e L'IA ha lanciato ${aiNumber}, quindi hai vinto`);

else
    console.log(`Entrambi avete lanciato ${userNumber}, quindi è pareggio`);