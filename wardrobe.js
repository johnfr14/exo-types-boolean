let isRainy = true
let isWindy = false
let temperature = 10
let clothes = 't-shirt, calçon, '
let inCapdAgde = false
let inSalleDeSport = true


if (isRainy) {
  clothes += 'umbrella, ' // concatenation de string
}

if (temperature < 15 || isWindy) {
  clothes += 'coat, '
  clothes += 'pantalon, '
} else if (temperature >= 15 && temperature <= 20) {
  clothes += 'sweater, '
  clothes += 'pantalon, '
} else if (temperature > 20 && temperature <= 30) {
  clothes += 't-shirt, '
  clothes += 'short'
} else {
    clothes += 'crème solaire, '
    clothes += 'lunettes de soleil, '
    clothes += 'chapeau, '
}

if(inSalleDeSport){
  clothes += 'chaussure de running, '
}

if (inCapdAgde){
  clothes = ''
}

console.log(`Je vous recommande de porter: ${clothes}`)