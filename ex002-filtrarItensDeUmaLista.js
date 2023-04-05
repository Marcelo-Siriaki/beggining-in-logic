//Filtrar itens dentro de uma lista
//Quero selecionar apenas as palavras que contenham a letra x.

const lista = ["xadrez", "chave", "xícara", "esmalte", "xerox", "matrix", "chuveiro"];
let resultado = [];

for (let item of lista) {
    for (let indice = 0; indice < item.length; indice++) {
        if (item[indice] === "x") {
            resultado.push(item);
            break;
        }

    }

}
console.log(resultado);