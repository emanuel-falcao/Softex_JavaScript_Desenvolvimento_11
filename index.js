/* Desenvolva um código e crie nele:

- um objeto com, no mínimo, três propriedades;
- um array de tamanho três no mínimo;
- duas funções, a primeira lista as propriedades do objeto e a segunda, 
os elementos do array.

Trabalhe esse código em seu IDE, suba ele para sua conta no GitHub
*/

console.log("Desenvolvimento 11");

const casa = ["sala", "quarto", "banheiro", "cozinha"];

for(const c of casa){
console.log(c);
}
    let banco = {
        nome : "Emanuel",
        conta : "1234-9",
        agencia : "0047",
        saldo : 1000.00
    };

for(const campos in banco){
    console.log(`${campos} : ${banco[campos]}`);
}