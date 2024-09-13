const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'id-ID';

let currentAudio = null;

function playWelcomeMessage() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio('VoiceMateriIPA.mp3');
    currentAudio.play().catch(error => {
        console.log('Pemutaran audio gagal:', error);
    });
}

function playButtonClickSound() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio('Voice1.mp3');
    currentAudio.play().catch(error => {
        console.log('Pemutaran audio gagal:', error);
    });
}

recognition.onresult = function(event) {
    const speechResult = event.results[0][0].transcript.toLowerCase();

    if (speechResult.includes('1')) {
        window.location.href = 'ipabab1.html'; 
    } else if (speechResult.includes('2')) {
        window.location.href = 'ipabab2.html'; 
    } else if (speechResult.includes('3')) {
        window.location.href = 'ipabab3.html'; 
    } else {
        alert("Bab tidak ditemukan, silakan ulangi lagi."); 
    }
};

// Event handler untuk error pengenalan suara
recognition.onerror = function(event) {
    console.error('Error:', event.error);
};

// Memutar pesan selamat datang saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    playWelcomeMessage();
});

// Event listener untuk tombol mic agar pengenalan suara mulai saat ditekan
document.querySelector('.mic-button').addEventListener('click', function() {
    playButtonClickSound();  // Putar suara tombol
    recognition.start();     // Mulai pengenalan suara
});
