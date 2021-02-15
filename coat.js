let isRainy = true
let isWindy = false
let temperature = 20

if (isRainy || isWindy && temperature < 30) {
  console.log('Mettez votre manteau')
}
else if (temperature < 15)
  console.log("houlala ça caille mettez le manteau")
 else {
  console.log('Nous n avez pas besoin de manteau today')
}