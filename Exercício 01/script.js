let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const subtraction = numberOne - numberTwo
const multiplication = numberOne * numberTwo
const division = numberOne / numberTwo
const rest = numberOne % numberTwo

alert(`A soma dos dois números é: ${sum}`)
alert(`A subtração dos dois números é: ${subtraction}`)
alert(`A multiplicação dos dois números é: ${multiplication}`)
alert(`A divisão dos dois números é: ${division}`)
alert(`O resto da divisão é: ${rest}`)

let evenOrOdd = ""

if (sum % 2 == 0) {
  evenOrOdd = "par"
} else {
  evenOrOdd = "ímpar"
}

alert(`A soma dos dois número è ${evenOrOdd}: ${sum}`)

if (numberOne == numberTwo) {
  alert(`Os números inseridos são iguais`)
} else {
  alert(`Os números inseridos são diferentes`)
}