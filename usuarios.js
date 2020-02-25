// Usuários e tecnologias

//Crie um programa que armazena 
//um array de usuários (objetos),
//cada usuário tem um nome
// suas tecnologias (novo array).


const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];


function inforUser (user){
        for(let i = 0; i < user.length; i ++){
              console.log(`${user[i].nome} trabalha com ${user[i].tecnologias}`)
        }
}

inforUser(usuarios);