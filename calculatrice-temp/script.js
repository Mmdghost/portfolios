const button = document.querySelector("#convert-btn")
const celsiusInput = document.querySelector("#celsius-input")
const result = document.querySelector("#result")

const convertirEnFahrenheit = (celsius) => {
  return (celsius * 9 / 5) + 32
}

button.addEventListener("click", () => {
  const celsius = parseFloat(celsiusInput.value)

  // Validation — toujours vérifier avant de calculer
  if (isNaN(celsius)) {
    result.textContent = "Entrez un nombre valide"
    result.classList.remove("hidden")
    return
  }

  const fahrenheit = convertirEnFahrenheit(celsius)
  result.textContent = `${celsius}°C = ${fahrenheit.toFixed(2)}°F`
  result.classList.remove("hidden")
})