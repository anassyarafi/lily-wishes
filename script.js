let currentMemory = 0;

const memories = [
    { image: "pic1.jpg", text: "My love, I just want to take a moment to remind you how truly special you are to me. You are the most beautiful part of my life, not only because of your smile or your eyes, but because of your heart. Your kindness, your strength, and the way you care about the people around you inspire me every single day. I feel so lucky and grateful to have you by my side. I wish you endless happiness, success in everything you dream of, and the courage to chase every goal you set for yourself. May every step you take bring you closer to the future you deserve. Whenever you feel tired, doubtful, or overwhelmed, remember that I believe in you more than anything. You are stronger than you think and more capable than you know.Thank you for loving me, supporting me, and being my safe place. I promise to always stand beside you, to cheer for you, and to love you with all my heart. No matter what happens, I will always choose you. I love you today, tomorrow, and forever. 💕" },
    { image: "pic2.jpg", text: "“Your smile is my favorite thing” means more than just liking the way you look. It means your smile brings peace to my heart and happiness to my day. When you smile, everything feels lighter and brighter, like the world suddenly makes sense. Your smile gives me comfort during hard times and makes good moments even better. It is simple, but it holds so much warmth and sincerity. Seeing you smile reminds me why I care so much about you. It is natural, beautiful, and full of life. Out of everything in this world, your smile will always be my favorite thing. 😊" },
    { image: "pic3.jpg", text: "“With you, everything feels right 💕” means that being by your side brings a sense of peace and completeness that I can’t find anywhere else. When I’m with you, my worries feel smaller and my heart feels lighter. Even the simplest moments become special because we share them together. You make ordinary days feel meaningful and beautiful. Your presence gives me comfort, confidence, and happiness all at once. I don’t have to pretend or hide who I am, because with you, I feel understood and accepted. No matter what happens around us, as long as I’m with you, everything truly feels right. 💕" },
    { image: "pic4.jpg", text: "“Every second with you matters 🌹” means that no moment spent together is ever wasted or taken for granted. Even the quiet times, the simple talks, and the small laughs become precious memories in my heart. Being with you makes time feel special, like each second carries meaning and warmth. I appreciate your presence, your voice, and the way you make me feel valued and understood. Life moves fast, but when I’m with you, I want to slow it down and truly enjoy every heartbeat. Because loving you means cherishing every moment, every smile, and every second we share together. 🌹" },
    
    { image: "pic6.jpg", text: "“Your laugh is my happiness 😍” means that nothing in this world brings me more joy than hearing you laugh. The sound of your laughter is like music to my heart, bright and full of life. It instantly lifts my mood and makes even the hardest days feel lighter. When you laugh, your whole face shines, and it reminds me how lucky I am to be part of your world. I love knowing that I can be someone who makes you smile and laugh. Your happiness becomes my happiness. Every giggle, every chuckle, every burst of laughter is a beautiful moment I will always cherish. 😍" },
   
    { image: "pic8.jpg", text: "“You complete my world ✨” means that before you, something always felt missing, like a piece of my heart was still searching. But when you came into my life, everything started to feel whole and meaningful. You bring balance to my chaos, light to my dark days, and warmth to my lonely moments. With you, I feel understood, supported, and deeply loved. You make my dreams feel possible and my fears feel smaller. Life is more beautiful because you are in it. It’s not that I can’t live without you, but with you, my world feels brighter, fuller, and truly complete. ✨" },
   
    { image: "pic10.jpg", text: "I love you more than words can say ❤️" }
];

function showLove() {
    let music = document.getElementById("bgMusic");
    music.play();

    document.getElementById("memorySection").style.display = "block";
    updateMemory();

    document.getElementById("openBtn").style.display = "none";
}

function updateMemory() {
    const card = document.querySelector(".memory-card");
    card.style.animation = "none";
    card.offsetHeight;
    card.style.animation = "fadeIn 0.8s ease-in-out";

    document.getElementById("memoryImage").src = memories[currentMemory].image;
    document.getElementById("memoryText").innerText = memories[currentMemory].text;
}

function nextMemory() {
    currentMemory++;
    if (currentMemory >= memories.length) {
        currentMemory = 0;
    }
    updateMemory();
}

function openCard() {

    // Start music
    document.getElementById("bgMusic").play();

    // Show memory section
    document.getElementById("memorySection").style.display = "block";

    // Hide open button
    document.getElementById("openBtn").style.display = "none";

    updateMemory();

}

