const notas = [5,7,8,8.5,10];
//inclui um elemento na loista passado por parâmetro
notas.push(9);

//notas.pop() retira o último elemto da lista
console.log("todas as notas são " + notas);

let nota=0

for (let i=0; i < notas.length; i++){
  nota= notas[i] + nota
}
let media = nota/notas.length
console.log ("A Média é " + media)
//array1.find(element => element > 10);
//Pesquisa o primeiro elemento maior que 7

nota = notas.find(element => element > 7)
console.log("O método find retorna " + nota)

//pessquisa todos os elementos maior que 7

nota = notas.filter(element => element > 7)
console.log("O método filter retorna " + nota)

//traz o índice da posição onde encontra o elemtno pesquisado

nota = notas.findIndex(element => element > 7)
console.log("O índice é " + nota)