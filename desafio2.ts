interface Pessoa {
    nome: string,
    idade: number,
    profissao?: string,
}

enum Profissao {
    Padeiro,
    Atriz
    
}

const maria: Pessoa = {
    nome: 'Maria',
    idade: 23,
    profissao: 'atriz'
}

const roberto: Pessoa = {
    nome: 'Roberto',
    idade: 19,
    profissao: 'Padeiro'
}   

const laura: Pessoa = {
    nome: 'Laura',
    idade: 32,
    profissao: 'Atriz'
}   

const carlos: Pessoa = {
    nome: 'Carlos',
    idade: 19,
    profissao: 'padeiro'
}   
