const generateButton = document.querySelector<HTMLButtonElement>('.App-generateButton')
const limitInput = document.querySelector<HTMLInputElement>('.App-limitInput')
const generatedText = document.querySelector<HTMLParagraphElement>('.App-generatedText')
const outputContainer = document.querySelector<HTMLDivElement>('.App-outputContainer')
const clipboardButton = document.querySelector<HTMLButtonElement>('.App-clipboardButton')
const clipboardIcon = document.querySelector<HTMLImageElement>('.App-clipboardIcon')
const tooltip = document.querySelector<HTMLSpanElement>('.App-tooltip')

if (
  generateButton !== null &&
  limitInput !== null &&
  generatedText !== null &&
  outputContainer !== null &&
  clipboardButton !== null &&
  clipboardIcon !== null &&
  tooltip !== null
) {
  generateButton.addEventListener('click', () => {
    const limit = Number(limitInput.value)

    if (!Number.isFinite(limit) || limit <= 0) {
      generatedText.textContent = 'Por favor ingresa un número válido'
      outputContainer.hidden = false
      outputContainer.classList.add('App-outputContainer--visible')
      return
    }

    const randomNumber = Math.floor(Math.random() * limit)
    generatedText.textContent = randomNumber.toLocaleString()

    outputContainer.hidden = false
    outputContainer.classList.add('App-outputContainer--visible')

    clipboardIcon.src = './icons/clipboard.svg'
    tooltip.classList.remove('App-tooltip--visible')
  })

  clipboardButton.addEventListener('click', () => {
    const text = generatedText.textContent ?? ''
    if (text.length > 0) {
      void navigator.clipboard.writeText(text)

      clipboardIcon.src = './icons/check.svg'

      tooltip.classList.add('App-tooltip--visible')

      setTimeout(() => {
        tooltip.classList.remove('App-tooltip--visible')
        clipboardIcon.src = './icons/clipboard.svg'
      }, 2000)
    }
  })
}
