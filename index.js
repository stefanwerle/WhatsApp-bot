const puppeteer = require("puppeteer-core");

(async () => {
  try {
    const browser = await puppeteer.launch({
      executablePath: "/data/data/com.termux/files/usr/lib/chromium/chrome", // Calea către Chromium
      headless: false, // Pune true dacă vrei să rulezi fără interfață grafică
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();
    await page.goto("https://www.google.com");

    console.log("Pagina s-a deschis cu succes!");
    await browser.close();
  } catch (error) {
    console.error("Eroare la rulare:", error);
  }
})();
