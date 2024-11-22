//question 1
let characters = ['Harry', 'Hermione', 'Ron', 'Draco', 'Luna']

for (let i = 0; i <= 4; i++)
{
    console.log(characters[i])
}


//question 2
let firstName = 'Harry'
let house = 'Gryffindor'
let greeting = `Hello, ${firstName} of ${house}!`;
console.log(greeting);


//question 3
let characterName = 'Herminone'
console.log(characterName.toUpperCase());
console.log(characterName.toLowerCase());


//question 4
let spell = ' Expelliarmus '
console.log(`${spell.trim()}`);



//question 5
let quote = 'I solemnly swear that I am up to no good'
console.log(quote.slice(11, 16))


//question 6
let first = 'Ron'
let last = 'Weasley'
let combined = first.concat(" ", last);
console.log(combined);


//question 7
let sentance = 'Draco is a good wizard'
let replacedStr = sentance.replace("good", "bad");
console.log(replacedStr);


//question 8
let houses = ['Gryffindor', 'Hufflepuff', 'Ravenclaw']
houses.push('Slytherin');
houses.pop('Slytherin');
console.log(houses);


//question 9
let spells = ['Alohomora', 'Lumos', 'Nox']
spells.unshift('Accio');
console.log(spells);


//question 10
let professors = ['Dumbledore', 'McGonagall', 'Snape', 'Hagrid']
let slicedArr = professors.slice(1, 3);
console.log(slicedArr);


//question 11
let students = ['Neville', 'Seamus', 'Dean', 'Parvati']
students.splice(1, 2);
console.log(students)


//question 12
let phrase = ' Mischief Managed '
let phrase2 = `${phrase.trim()}`
console.log(phrase2.toLowerCase());


//question 13
let wizards = ['Harry', 'Hermione', 'Ron']
wizards.push('Luna', 'Draco');
console.log(wizards);


//question 14
let message = 'Welcome to Hogwarts School of Witchcraft and Wizardry'
let concat = "Castle"
console.log(message.slice(11, 19),(" ", concat));


