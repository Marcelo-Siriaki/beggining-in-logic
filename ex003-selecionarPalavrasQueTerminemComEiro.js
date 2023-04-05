//How to select words in an array that tha have the same ending, in this specific case "eiro"

const list = ["balão", "baloeiro", "caminhão", "caminhoneiro", "carrinho", "carrinheiro", "pedra", "pedreiro"];
let result = [];

for (let iten of list) {
    let size = iten.length;
    if (iten[size - 1] === "o" && iten[size - 2] === "r" && iten[size - 3] === "i" && iten[size - 4] === "e") {
        result.push(iten);
    };
};
console.log(result);