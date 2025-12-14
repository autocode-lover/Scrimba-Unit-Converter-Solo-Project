
const btnEl = document.getElementById("button-el")
let inputEl = document.getElementById("input-el")

let userEnteredValue =""


let lengthConversionsPara = document.getElementById("length-conversion-values")

let volumesConversionsPara = document.getElementById ("volumes-conversion-values")

let massConversionsPara = document.getElementById ("mass-conversion-values")


btnEl.addEventListener("click", function (){
 let userEnteredValue = Number(inputEl.value);   
console.log(userEnteredValue)

renderLength(userEnteredValue)
renderVolumes(userEnteredValue)
renderMass(userEnteredValue)
})


function renderLength(anyValue) {
    const metersToFeet = anyValue * 3.28084
    const feetToMeters = anyValue /  3.28084
   
    let roundFeetValue = metersToFeet.toFixed(2)
     let roundMetersValue = feetToMeters.toFixed(2)

    lengthConversionsPara.innerHTML = `${anyValue} meters to feet is ${roundFeetValue} ft and ${anyValue} feet to meters is ${roundMetersValue} mts`

    inputEl.value=""
}

function renderVolumes(anyValue){
    const literstoGallons = anyValue* 0.264172
    const gallonstoLiters = anyValue/0.264172

    let roundGallonsValue= literstoGallons.toFixed(2)
    let roundLitersValue = gallonstoLiters.toFixed(2)

    volumesConversionsPara.innerHTML = `${anyValue} liters = ${roundGallonsValue} gallons | ${anyValue} gallons = ${roundLitersValue} liters` 
}

function renderMass(anyValue){
    const kilogramsToPounds = anyValue* 2.20462
    const poundsToKilograms = anyValue/ 2.20462

    let roundPoundsValue = kilogramsToPounds.toFixed(2)
    let roundKilogramsValue = 
    poundsToKilograms.toFixed(2)


    massConversionsPara.innerHTML=
    `${anyValue} Kilograms = ${roundPoundsValue} Pounds | ${anyValue} Pounds = ${roundKilogramsValue} Kilograms` 

}



