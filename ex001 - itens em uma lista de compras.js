// Exercício para verificar os itens de uma lista de compras.
// revisando os comandos git e uso do terminal e, também, um pouquinho de javascript.
const listaDeCompras = ["banana", "farinha", "milho", "pipoca", "batata"];
//verificar se o item "pipoca" está na lista

for (let iten of listaDeCompras) {
    console.log("Verificando iten " + iten);
    if (iten === "pipoca") {
        console.log(iten + " consta na lista.");
        break;
    }

}