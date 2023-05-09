let valores = [5, 8, 2, 9, 3]
/*
console.log(`Nosso vetor é o ${num}`)
*/
valores[5] = 6

valores.push(7)

valores.sort()
/*
for (var c = 0; c < num.length; c++) {
    console.log(`Elemento da posição ${c + 1} é o ${num[c]}`)
}
*/

console.log(valores)

for (let pos in valores) {
    console.log(`Elemento da posição ${pos} é o ${valores[pos]}`)
}


console.log(valores.indexOf(9))

console.log(valores.indexOf(4))
