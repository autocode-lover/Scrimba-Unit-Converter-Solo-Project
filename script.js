
const btnEl = document.getElementById("button-el")
let inputEl = document.getElementById("input-el")

let userEnteredValue =""


let lengthConversionsPara = document.getElementById("length-convertion-values")


btnEl.addEventListener("click", function (){
 let userEnteredValue = Number(inputEl.value);   
console.log(userEnteredValue)

renderLength(userEnteredValue)
})

function renderLength(anyValue) {
    const metersToFeet = anyValue * 3.28084
    const feetToMeters = anyValue /  3.28084
   
    let roundFeetValue = metersToFeet.toFixed(2)
     let roundMetersValue = feetToMeters.toFixed(2)

    lengthConversionsPara.innerHTML = `${anyValue} meters to feet is ${roundFeetValue} ft and ${anyValue} feet to meters is ${roundMetersValue} mts`

    inputEl.value=""
}



