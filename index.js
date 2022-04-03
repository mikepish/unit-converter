const message = document.querySelector('#message')

const meters = document.querySelector('#meters')
const feet = document.querySelector('#feet')
const convertToMeters = document.querySelector('#convert-to-meters')
const convertToFeet = document.querySelector('#convert-to-feet')

const liters = document.querySelector('#liters')
const gallons = document.querySelector('#gallons')
const convertToLiters = document.querySelector('#convert-to-liters')
const convertToGallons = document.querySelector('#convert-to-gallons')

const kilograms = document.querySelector('#kilograms')
const pounds = document.querySelector('#pounds')
const convertToKilograms = document.querySelector('#convert-to-kilograms')
const convertToPounds = document.querySelector('#convert-to-pounds')

message.addEventListener('input', function () {
  // length (meter/feet)
  meters.textContent = this.value
  convertToFeet.textContent = (this.value * 3.28084).toFixed(3)
  feet.textContent = this.value
  convertToMeters.textContent = (this.value / 3.28084).toFixed(3)

  // volume (liters/gallons)
  liters.textContent = this.value
  convertToGallons.textContent = (this.value / 3.785).toFixed(3)
  gallons.textContent = this.value
  convertToLiters.textContent = (this.value * 3.785).toFixed(3)

  // mass (kilograms/pounds)
  kilograms.textContent = this.value
  convertToPounds.textContent = (this.value * 2.205).toFixed(3)
  pounds.textContent = this.value
  convertToKilograms.textContent = (this.value / 2.205).toFixed(3)
})
