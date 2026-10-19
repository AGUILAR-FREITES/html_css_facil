
// const text ="Hello";



// for(let i = 0; i < text.length; i++){

//     console.log(text.charAt(i));

// }


// let number = 0;
// const base = 2;
// const exp = 3;
// let result = 1;


// while(number < exp){
//     number ++;

//     result *= base;
// }


// console.log(`${base} raised to ${exp} is ${result}`);


// let number = 0;
// const max = 10;

// do{
//     number++;
//     console.log(number);

// }while (number < max)




// const str = "The quick red fox jumped over the lazy dog's back.";

// const iterator = str[Symbol.iterator]();
// let theChar = iterator.next();

// while (!theChar.done && theChar.value !== " ") {
//   console.log(theChar.value);
//   theChar = iterator.next();
//   // Expected output: "T"
//   //                  "h"
//   //                  "e"
// }

// Ejercicio 1

// const text ="hello world";
// const vowels = "aeiou'";
// let counter = 0;

// for(let i = 0; i< text.length; i++){


//     if(vowels.includes(text.charAt(i))){
//         counter++;
//     }

    
// }



// document.getElementById("app").innerHTML = `Number of vowels is ${counter}`;


// ####################################################################

// Ejercicio 2

// let text = "hEllo world";
// const vowels = "aeiou";

// let sinVowels = text.replace(/[aeiou]/gi, " ");

// document.getElementById("app").innerHTML = `Sin vowels is: " ${sinVowels} "`;

// const vowels = "aeiouAEIOU";
// let text = "hi, I am learning JavaScript";


// for(let i=0; i<vowels.length; i++){
//     const vowel = vowels.charAt(i);

//     if(text.includes(vowel)){

//         text = text.replaceAll(vowel, " ");
//     }

// }

// document.getElementById("app").innerHTML = text;







// FUNCIONES

// let number = 2;

// function square(number){
//     return number * number;
// }

// let result = square(2);

// document.getElementById("app").innerHTML = result;



//########## Saludo nombre: function greeting(name) {}###########

// let nombre= "Enrique";

// function string(nombre){
//     return nombre;
// }

// let result = nombre;

// document.getElementById("app").innerHTML = result;


//#############Contador de Vocales #############

// function vowelsRemover(text){
    
//     const vowels = "aeiouAEIOU";


//     for(let i=0; i<vowels.length; i++){
//         const vowel = vowels.charAt(i);

//         if(text.includes(vowel)){

//             text = text.replaceAll(vowel, " ");
//         }

//     }

//     return text;
// }


// document.getElementById("app").innerHTML = vowelsRemover("hi, I am learning JavaScript");

// console.log(vowelsRemover("hi, I am learning JavaScript"))
// console.log(vowelsRemover("asociacion"))
// console.log(vowelsRemover("Anzoategui"))
// console.log(vowelsRemover("Bolivia"))
// console.log(vowelsRemover("Australia"))
// console.log(vowelsRemover("Paraguay"))


// ######### Funciones Ejemplo practico 1 palíndromo ###########

// function isPalindrome(text){
//     const accents ="áéíóú";
//     const vowels ="aeiou"

//     text =text.toLowerCase(text);
//     text = text.replaceAll(" ", "");

//     for(let i = 0; i <accents.length; i++){
//         if(text.includes(accents.charAt(i))){
//             text = text.replaceAll(accents.charAt(i), vowels.charAt(i));
//         }
//     }

//     for(let i = 0; i < text.lenht / 2; i ++){
//         const lChar = text.charAt(i);
//         const rChar = text.charAt(text.length - 1 - i);

//         if(lChar !== rChar){

//             return false;

//         }
//     }

//     return true;
// }


// const text = "Débale arroz a la zorra el abad";
// document.getElementById("app").innerHTML = isPalindrome(text);



// ######## Funciones Ejemplo practico 1 palíndromo #########

function formaText(text){
    return text.toLowerCase().replaceAll(" ", "");
}


function removeAccents(text){
    const accents ="áéíóúÁÉÍÓÚ";
    const vowels ="aeiou";

    for(let i = 0; i <accents.length; i++){
            if(text.includes(accents.charAt(i))){
            text = text.replaceAll(accents.charAt(i), vowels.charAt(i));
        }
    }

    return text;
}

function reverseString(text){

    let result = "";

    for(let i = text.length -1; i >= 0; i --){

        result += text.charAt(i);
    }

    return result;
    
}

function isPalindrome2(text){

    text = formaText(text);
    text = removeAccents(text);
    return text === reverseString(text);
}