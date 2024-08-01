// Criando um array
let alunos = ["João", "Maria", "José"]
let notas = new Array(8, 6, 4)

// Acesso as posições => 0 - João e o 2 - José
let nomeDoAluno = alunos[1] // Maria
let notaDoAluno = notas[1] // 6
// console.log('O ' + nomeDoAluno + ' tem a nota ' + notaDoAluno);

// Funções para manipulação de arrays

// Adicionar elementos a um array
// Ao final do array
console.log(alunos.push('Paulo', 'Cleuza', 'William'))
// No inicio do array
console.log(alunos.unshift("Henrique", "Helena", "Pietro"));
// Mostrar o array como uma tabela
console.table(alunos);

// Remover elementos a um array
// Remover do final do array
console.log(alunos.pop())

// Remover do inicio do array
console.log(alunos.shift());

// Mostrar o array como uma tabela
console.table(alunos);

// Buscas / Filtros
// Procurar um aluno na lista
let temOAluno = alunos.includes('Maria')
if (temOAluno) {
  console.log("O aluno está na lista de chamada");
} else {
  console.log("O aluno NÃO ESTÁ na lista de chamada");
}