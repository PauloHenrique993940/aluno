// Criando array de Alunos
const alunos = [
    // Array de Objetos
    { nome: "Ana", Nota: 4.0 },
    { nome: "Bia", Nota: 3.0 },
    { nome: "André", Nota: 0.0 },
    { nome: "Joana", Nota: 9.0 },
    { nome: "Nara", Nota: 7.5 },
    { nome: "Pedro", Nota: 7.0 },
    { nome: "Mateus", Nota: 6.5 },
    { nome: "João", Nota: 4.0 },
    { nome: "Victor", Nota: 1.0 },
    { nome: "Cleide", Nota: 2.0 },
    { nome: "Carla", Nota: 5.0 },
    { nome: "Osvaldo", Nota: 8.0 },
    { nome: "Paulo", Nota: 8.8 },
    { nome: "Guilherme", Nota: 8.6 },
    { nome: "Rodrigo", Nota: 8.5 },
    { nome: "Aline", Nota: 4.0 },
    { nome: "Ana vitória", Nota: 6.0 },
    { nome: "Ana Clara", Nota: 6.0 },
    { nome: "Ana Teresa", Nota: 6.8 },
    { nome: "Ana Beatriz", Nota: 7.0 },
    { nome: "Ana Paulo", Nota: 7.0 },
    { nome: "Ana júlia", Nota: 7.0 },
    { nome: "Vagner", Nota: 4.0 },
    { nome: "Jorge", Nota: 6.0 },
    { nome: "Daniel", Nota: 6.2 },
    { nome: "Henrique", Nota: 8.0 }
];

// Criando a função para filtrar os alunos que têm a nota >= 6

function filtrarAprovados(alunos) {
    return alunos.filter(aluno => aluno.Nota >= 6); // Acessa "Nota" com N maiúsculo

    
}

// Chamando a função e exibindo os alunos aprovados
const aprovados = filtrarAprovados(alunos);
console.log(aprovados);

