//médias 10, 6,,5,8,7,5

//let nota1 = 10
//let nota2 = 6.5
//let nota3 = 8
//let nota4 = 7.5

const notas = [10,6.5,8,7.5];

//let media = (nota1 + nota2 + nota3 + nota4)/4
let nota=0

for (let i=0; i < notas.length; i++){
  nota= notas[i] + nota
}
let media = nota/notas.length
console.log (media)