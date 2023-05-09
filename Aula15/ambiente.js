let num = [5, 8, 2, 9, 3]

console.log(`Nosso vetor é o ${num}`)
console.log(num)

num[5] = 6
num.push(7)
console.log(num)

console.log(num.length) // Não é um método e sim um atributo

console.log(num.sort())

console.log(`O vetor tem ${num.length} elementos`)
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (var c = 0; c < num.length; c++) {
    console.log(num[c])
}