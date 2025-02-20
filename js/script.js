// Copy paste prevention
document.addEventListener("copy", (e) => {
    e.preventDefault();
    e.clipboardData.setData("text/plain", "Padhle bhai 😛 Copy-Paste karna hai se ghar nhi chalta");
});
//-----------------------
//loader 
setTimeout(function () {
    document.getElementById('loader').style.display = 'none';
}, 8000);


//--------------------------------
//musicplayer 

const visualizer = document.getElementById("visualizer");
const bars = document.querySelectorAll(".bar");
const audio = new Audio("programs/stuffs/salva.mp3");
let playing = false;

function animateBars() {
    bars.forEach((bar, i) => {
        bar.style.animation = `bounce 1s ${i * 0.1}s infinite ease-in-out`;
    });
}

function stopBars() {
    bars.forEach(bar => bar.style.animation = "none");
}

// Play audio and animate bars when loader is displayed
function playAudioWithLoader() {
    audio.currentTime = 0;
    audio.loop = true;
    audio.play().then(() => {
        animateBars();
    }).catch(err => console.log("Autoplay blocked: ", err));
}

// Assuming the loader is an element with id 'loader'
const loader = document.getElementById("loader");
if (loader) {
    loader.addEventListener("load", playAudioWithLoader);
}

visualizer.addEventListener("click", () => {
    if (!playing) {
        audio.play();
        animateBars();
    } else {
        audio.pause();
        stopBars();
    }
    playing = !playing;
});