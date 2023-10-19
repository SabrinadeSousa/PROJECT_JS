/* IF */

let idade = 19;

if(idade == 19) {
    console.log("A idade e = 19");
}

if (idade > 25) {
    console.log("A idade e maior que 25");
}

let nome = "Sabrina";

if(nome == "Sabrina" && idade >10) {
    console.log("Liberado!");
}

passaporte = true;

if((nome == "Sabrina" && idade > 30) || passaporte == true) {
    console.log("Liberado 2!");
}

/* ELSE */

let velocidade = 70;

if(velocidade <= 80) {
    console.log("Nao foi multado");
} else {
    console.log("Foi multado!");
}

/* ELSE IF */

let nome_1 = "Sabrina";

if(nome_1 != undefined && nome == "Joaquim"){
    console.log("Nome esta definido");
} else if(nome_1 == "Sabrina" && nome.length > 5 && idade == 50) {
    console.log("O nome e Sabrina");
} else {
    console.log("Nao e Sabrina!");
}