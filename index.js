// Iteration 1: Names and Input

let hacker1 = "Elyes";
console.log(`The driver's name is ${hacker1}`);
let hacker2 = "Elyes Navigator";
console.log(`The driver's name is ${hacker2}`);

//Si l'exercice attend un input d'un utilisateur
// const hacker1 = prompt('Quel est le nom du conducteur? :');
// console.log(`The driver's name is ${hacker1}`);
// const hacker2 = prompt('Quel est le nom du navigateur? :');
// console.log(`The driver's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
  console.log(
    `The driver has the longest name, it has ${hacker1.length} characters.`
  );
} else if (hacker1.length < hacker2.length) {
  console.log(
    `It seems that the navigator has the longest name, it has ${hacker2.length} characters`
  );
} else {
  console.log(
    `Wow, you both have equally long names, ${hacker1.length} characters!`
  );
}

// Iteration 3: Loops
//3.1
let repFinal = "";
let majHacker1 = hacker1.toUpperCase();
for (i = 0; i < majHacker1.length; i++) {
  repFinal += " " + majHacker1[i];
}
console.log(repFinal);
//3.2
let repFinal2 = "";
for (i = 0; i < majHacker1.length; i++) {
  repFinal2 = majHacker1[i] + repFinal2;
}
console.log(repFinal2);
//3.3
if (hacker2.localeCompare(hacker1) == 1) {
  console.log("The driver's name goes first.");
} else if (hacker1.localeCompare(hacker2) == 1) {
  console.log("Yo, the navigator goes first definitely.");
} else {
  console.log("What?! You both have the same name?");
}

//Bonus 1
let longText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sit amet interdum eros, ut feugiat purus. Morbi sed luctus sem. Nam nec tristique odio. Quisque pretium vitae ipsum in accumsan. Mauris aliquet tortor risus, et commodo mauris hendrerit et. Donec neque enim, pellentesque id fermentum sit amet, mattis in erat. Morbi lobortis ligula ac neque varius, id gravida magna lacinia. Etiam ac mi cursus, luctus tellus non, maximus urna. Maecenas at lorem turpis. Donec sodales turpis libero, et condimentum mauris consectetur quis. Nam ut pulvinar nulla. Morbi fermentum in nunc quis fermentum. Proin vel semper neque, non vestibulum ante. Duis tristique leo fringilla tortor euismod dapibus. Nullam eu mollis lectus. Donec varius tortor sed viverra aliquet. Duis imperdiet pellentesque mauris eget fringilla. Nullam accumsan iaculis tellus, nec bibendum sem consequat ut. Duis ultrices a magna eget laoreet. In ultrices erat ut quam cursus mollis. Ut nec tincidunt mi.Aenean in consequat diam. In bibendum, dolor non faucibus malesuada, nisi libero vulputate odio, sit amet feugiat lorem tortor a risus. Sed ac finibus odio. Ut iaculis elit egestas est vehicula, sed finibus leo mattis. Vestibulum at nulla eget quam viverra pellentesque vitae ac mauris. Proin neque ligula, interdum et nunc quis, tristique placerat magna. Suspendisse id nunc gravida, eleifend nisl eu, cursus augue. Phasellus sem lorem, mollis eu semper quis, tempus id ex.'
let formattLongText = longText.toString()
console.log(formattLongText.split(' ').length);

let j=0
for(let i=0; i<formattLongText.length;i++){
    if(formattLongText[i-1] + formattLongText[i] == "et"){
        j++
    }
}
console.log(j)

//Bonus 2 :
let phraseToCheck = "" //phrase à entrer
let reversePhraseToCheck = ""

for (i = 0; i < phraseToCheck.length; i++) {
    reversePhraseToCheck = phraseToCheck[i] + reversePhraseToCheck;
}

if(phraseToCheck == reversePhraseToCheck){
    console.log("C'est un palindrome")
}
else {console.log("Ce n'est pas un palindrome")}
