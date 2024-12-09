// Список звуков и соответствующих кнопок
// Liste over lyder og tilhørende knapper

const drumKeys = [
    { key: "Q", sound: "clap.wav", elementId: "clap" },
    { key: "W", sound: "hihat.wav", elementId: "hihat" },
    { key: "E", sound: "kick.wav", elementId: "kick" },
    { key: "R", sound: "openhat.wav", elementId: "openhat" },
    { key: "A", sound: "ride.wav", elementId: "ride" },
    { key: "S", sound: "snare.wav", elementId: "snare" },
    { key: "D", sound: "tink.wav", elementId: "tink" },
    { key: "F", sound: "tom.wav", elementId: "tom" },
];

// Контейнер барабанов
// Trommel beholder
const drumKit = document.getElementById("drum-kit");

// Функция воспроизведения звука
// Funksjon for lydavspilling
function playSound(key) {
    const drum = drumKeys.find((d) => d.key === key.toUpperCase());
    if (!drum) return;

    const sound = new Audio(`sound/${drum.sound}`);
    sound.play();

    const drumElement = document.getElementById(drum.elementId);
    drumElement.classList.add("active");

    setTimeout(() => drumElement.classList.remove("active"), 200);
}

// Событие для кликов
// Klikk på Hendelse 
drumKit.addEventListener("click", (event) => {
    if (event.target.classList.contains("drum")) {
        const key = event.target.dataset.key;
        playSound(key);
    }
});

// Событие для нажатий клавиш
// Tastetrykk-hendelse
document.addEventListener("keydown", (event) => {
    playSound(event.key);
});
