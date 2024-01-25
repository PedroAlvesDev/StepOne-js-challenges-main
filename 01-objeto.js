// 1- Crie um objeto chamado user com as seguintes propriedades:

// - username
// - email
// - age

// E com os seguintes métodos (ações):

// - login: com o console.log("Efetuou o login");
// - logout: com o console.log("Efetuou o logout");

// 2- Mostre uma propriedade! Agora dê um console.log apenas da propriedade age

// 3-  Adicione uma nova propriedade! Adicione uma nova propriedade chamada phone e depois dê um console.log(user); para ver se a propriedade realmente foi adicionada.

// 4- Faça um update de um valor! Troque o valor do username para outro valor e depois dê um console.log(user); para ver se a propriedade realmente foi substituída.

// 5- Remova um valor! Remova o valor age e depois dê um *console.log(user);* para ver se a propriedade realmente foi deletada.

let user = {
    username: "Pedro Henrique",
    email: "desafioJavaScript@gmail.com",
    age: "26",

    login: function () {
        console.log("Efetuou o login");
    },

    logout: function () {
        console.log("Efetuou o logout");
    },
};

console.log(user.age)

user.phone= 61995955959

console.log(user)
user.username= "Henrique"
user.age= 19

console.log(user)

delete user.age

console.log(user)