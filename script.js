const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();
recognition.lang = 'id-ID';

let currentAudio = null;

function playWelcomeMessage() {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
    }

    currentAudio = new Audio('VoiceHome.mp3');
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

    if (speechResult.includes('ips')) {
        window.location.href = 'ips.html';
    } else if (speechResult.includes('ipa')) {
        window.location.href = 'ipa.html';
    } else {
        alert("Pelajaran tidak ditemukan, coba lagi.");
    }
};

recognition.onerror = function(event) {
    console.error('Error:', event.error);
};

document.addEventListener('DOMContentLoaded', function() {
    playWelcomeMessage();  
});

document.querySelector('.mic-button').addEventListener('click', function() {
    playButtonClickSound();  
    recognition.start();     
});
