const puppeteer = require('puppeteer');

(async () => {
  const serverUrl = process.env.TEST_URL || 'http://localhost:8080/index.html';
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  let pageError = null;
  page.on('pageerror', err => { pageError = err; });
  page.on('console', msg => {
    if (msg.type() === 'error') pageError = new Error('Console error: ' + msg.text());
  });

  try {
    await page.goto(serverUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page.waitForSelector('#gameCanvas', { visible: true, timeout: 5000 });

    const checks = await page.evaluate(() => {
      return {
        canvasPresent: !!document.querySelector('#gameCanvas'),
        startBtn: !!document.querySelector('#startBtn'),
        difficulty: !!document.querySelector('#difficultySelect'),
        volume: !!document.querySelector('#volumeSlider'),
        soundToggle: !!document.querySelector('#soundToggle')
      };
    });

    if (!checks.canvasPresent || !checks.startBtn) throw new Error('Essential UI missing');

    // click Start and ensure no runtime error
    await page.click('#startBtn');
    await page.waitForTimeout(300);
    if (pageError) throw pageError;

    console.log('FRONTEND SMOKE OK:', checks);
    await browser.close();
    process.exit(0);
  } catch (err) {
    console.error('FRONTEND SMOKE FAILED:', err && err.message ? err.message : err);
    await browser.close().catch(()=>{});
    process.exit(2);
  }
})();
