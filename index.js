const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

// Inițializăm clientul WhatsApp
const client = new Client({
    authStrategy: new LocalAuth({ dataPath: "./session" }) 
});

// Afișăm codul QR pentru autentificare
client.on("qr", (qr) => {
    console.log("🔹 Scanează acest cod QR cu WhatsApp Web:");
    qrcode.generate(qr, { small: true });
});

// Când botul este conectat
client.on("ready", () => {
    console.log("✅ Botul WhatsApp este conectat și funcționează!");

    // Numerele sau grupurile către care trimite mesaj
    const targetNumbers = [
        "40712345678",  // Înlocuiește cu numărul real
        "12036393858710088@g.us" // ID grup WhatsApp (opțional)
    ];

    // Mesajul care va fi trimis
    const message = "Salut! Acesta este un mesaj automat.";

    // Trimitem mesajul către fiecare destinatar
    targetNumbers.forEach((number) => {
        client.sendMessage(number, message)
            .then(() => console.log(`📩 Mesaj trimis către ${number}`))
            .catch(err => console.error(`❌ Eroare la trimitere:`, err));
    });
});

// Inițializăm botul
client.initialize();
