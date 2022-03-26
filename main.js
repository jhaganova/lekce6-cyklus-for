// Použij výpis do konzole prohlížeče pomocí console.log('text')
// Konzoli otevřeš v Chrome stiskem F12 (na Windows) nebo Command-Option-I (na Macu)


// První příklad - vypiš vzestupně čísla od 0 do 10
console.log('První příklad - vzestupná řada 0 - 10');


// for (let i=0; i<=10; i=i+1) {
//     console.log(i);
// }

let  x=0;
while (x<=10) {
    console.log(x);
    x++;   
}




// Druhý příklad - zkopíruj předchozí příklad
// a vyzkoušej, jaký je rozdíl mezi <= a <
// v podmínce uvnitř cyklu

console.log('Druhý příklad - rozdíl mezi <= a <');

//TADY NAPIS CYKLUS

// for (let i=0; i<11; i=i+1) {
//     console.log(i);
// }

x = 0
while (x<11) {
    console.log(x);
    x++;  
}


// Třetí příklad - vypiš sestupně čísla od 10 do 0
console.log('Třetí příklad - sestupná řada 10 - 0');

//TADY NAPIS CYKLUS

// for (let i=10; i>=0; i=i-1) {
//     console.log(i);
// }

x=10 
while (x>=0) {
    console.log(x);
    x=x-1;
}