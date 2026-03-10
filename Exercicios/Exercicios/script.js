//Exercicio 1
let nome = "Enzo"
let idade = 16
let curso = "Infonet"
console.log("Meu nome é " + nome + " tenho "+ idade + " anos, e faço o curso " + curso)

//Exercicio 2
let num1=6
let num2=7
let soma1=num1+num2
console.log(soma1)

//Exercicio 3
let num3=10
let num4=2
console.log(num3+num4)
console.log(num3-num4)
console.log(num3*num4)
console.log(num3/num4)
console.log(num3%num4)

//Exercicio 4
let num5="30"
let numeroInteiro = Number(num5)
console.log(numeroInteiro+20)

//Exercicio 5
let a = 10;
let b = "10";

console.log(a == b);   
console.log(a === b);  

//Exercício 6
let idade2 = 18;

if (idade2 >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}

//Exercício 7
let num6 = -5;

if (num6 > 0) {
    console.log("Número positivo");
} else if (num6 < 0) {
    console.log("Número negativo");
} else {
    console.log("Zero");
}


//Exercício 8
let nota = 6;

if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5 && nota < 7) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
}

//Exercício 9
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Exercício 10
let soma = 0;

for (let i = 1; i <= 100; i++) {
    soma += i;
}

console.log("Soma:", soma);

//Exercício 11
let contador = 5;

while (contador >= 1) {
    console.log(contador);
    contador--;
}

//Exercício 12 
function somar(num7, num8) {
    return num7 + num8;
}

console.log(somar(5, 3));


// Exercício 13
     function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(verificarParImpar(4));