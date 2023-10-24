const textElement = document.getElementById("text-container");
const text = "Você é a personificação da beleza, a personificação do amor, a personificação de tudo o que é mais precioso neste vasto e misterioso universo. Feliz Aniversário Manami!";
let index = 0;
let isTyping = true;

textElement.style.textAlign = "center";
textElement.style.maxWidth = "80%"; 

function typeText() {
  textElement.textContent = text.substring(0, index);
  if (isTyping) {
    index++;
    if (index > text.length) {
      isTyping = false;
      setTimeout(backspaceText, 3000); // Aguarda 1 segundo antes de começar a apagar
    } else {
      setTimeout(typeText, 100); // Velocidade de digitação (100ms)
    }
  }
}

function backspaceText() {
  textElement.textContent = text.substring(0, index);
  if (!isTyping) {
    index--;
    if (index === 0) {
      isTyping = true;
      setTimeout(typeText, 3000); 
    } else {
      setTimeout(backspaceText, 40); // Velocidade de apagar (100ms)
    }
  }
}

typeText();
