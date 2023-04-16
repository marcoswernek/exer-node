
# Exercícios Node

*Crie uma rota GET para “/alunos” que lista todos os alunos. Deve conter query opcional para filtrar por nome e por média.

*Crie uma rota POST para “/alunos/novo” e o corpo da requisição deve conter (nome, matrícula e média). Valide os campos passados e caso contrário indique um erro (400);

*Crie uma rota POST para “/alunos/deletar/:index” que indica qual aluno remover do array de dados (index). Trate a chamada se o aluno não existir (404);

*Crie uma rota POST para /alunos/atualizar/:index, que no corpo da requisição recebe um objeto (nome, média) e atualiza os dados do aluno naquela posição. Trate a chamada se o aluno não existir (404);

