/*Crie um módulo alunos.js que exporta um array de alunos, uma função que filtra pelo nome e uma que filtra pela média (maior ou igual).*/

const alunos = [
  { matricula: '01', nome: 'Alice', media: 9.5 },
  { matricula: '02', nome: 'Bob', media: 7.5 },
  { matricula: '03', nome: 'Carlos', media: 6.5 },
  { matricula: '04', nome: 'Diana', media: 8.5 },
  { matricula: '05', nome: 'Eduardo', media: 5.5 },
];

/* Crie um módulo alunos.js que exporta um array de alunos, uma função que filtra pelo nome e uma que filtra pela média (maior ou igual).*/

// Criação da função de filtragem por nome
function filtrarPorNome(nome) {
  return alunos.filter(aluno => aluno.nome.toLowerCase().includes(nome.toLowerCase()));
};


// Criação da função de filtragem por média
function filtrarPorMedia(mediaMinima) {
  return alunos.filter((aluno) => aluno.media >= mediaMinima);
}

// Exportando o array e as funções de filtro
module.exports = {
  alunos,
  filtrarPorNome,
  filtrarPorMedia
};
