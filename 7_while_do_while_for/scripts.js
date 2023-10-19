/* WHILE */

let x = 10;

while(x > 0) {
    console.log("O x e " + x);
    x = x - 1;
}

let y = 0;

while(y <= 10) {
    console.log(y);
    y = y + 1;
}

// let z = 10;

// while(z > 0) {
//     console.log(z);  aqui ele cai em um loop infinito 
// }

/* DO WHILE */

// let a = 100;

// do {
//     console.log(a/2);
//     a = a - 5
// } while(a >= 0);

/* FOR */

for(let i = 0; i < 100; i = i + 3) {
    console.log(`A soma de i com 2 e: ${i + 2}`);
}