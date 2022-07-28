let numbers = [2, 7, 3, 9, 1, 5, 4, 8, 6] //exercicio 1
console.log(numbers) //exercicio 2
console.log("Quantidae de itens=",numbers.length) // exercicio 2
console.log("Imprima o primeiro item do primeiro array=", numbers[0]) // exercicio 2
console.log("inclui 2?", numbers.includes(2) ) // exercicio 2


let strings = ["mustang", "charger", "gallardo", "civic", "C4 pallas"]
console.log(strings) // exercicio 1
console.log("Quantidae de itens=",strings.length) // exercicio 2
console.log("o segundo item do segundo array=", strings[1]) // exercicio2


let misturado = ["mustang", 2, true]
console.log(misturado) // exercicio 1
console.log("Quantidae de itens=",misturado.length) // exercicio 2
console.log("o terceiro item do terceiro array", misturado[2]) // exercicio 2
console.log("inclui ferrari? ", misturado.includes("ferrari")) //exercicio 2

let numbersCopia = numbers.slice() // exercicio 3
numbersCopia.push("number")
console.log("Adicione um item `number` ao primeiro array.=", numbersCopia)

let stringsCopia = strings.slice() //exercicio 3
stringsCopia.pop()
console.log("Remova o último item do segundo array.=", stringsCopia)

let misturadoCopia = misturado.slice() // exercicio 3
misturadoCopia.splice( 1, 1 )
console.log("Remova o segundo item do terceiro array.=", misturadoCopia)