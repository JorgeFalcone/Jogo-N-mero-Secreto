window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

recognition.addEventListener('result', onSpeak)

const resultado = document.querySelector(".box")

function onSpeak(e){
    const voz = e.results[0][0].transcript
    resultado.innerHTML = voz
    verificaSeOChutePossuiUmValorValido(voz)
    
}

const botao = document.querySelector(".falar")

botao.addEventListener("click", () => recognition.start())

