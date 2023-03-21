let firstNumber = prompt('Digite o primeiro número:')
let seconNumber = prompt('Digite o segundo número:')
firstNumber = Number(firstNumber)
seconNumber = Number(seconNumber)

const sum = firstNumber + seconNumber
const sub = firstNumber - seconNumber
const multi = firstNumber * seconNumber
const div = firstNumber / seconNumber
const restDiv = firstNumber % seconNumber
const end = firstNumber % seconNumber

alert('A soma dos dois números é: ' + sum)
alert('A subtração dos dois números é: ' + sub)
alert('A multiplicação dos dois números é: ' + multi)
alert('A divisão dos dois números é: ' + div)
alert('O resto da divisão dos dois números é: ' + restDiv)
alert('A soma dos dois números é ímpar: ' + end)
alert('Os números inseridos são diferentes.')