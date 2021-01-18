const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch(headless= false, defaultViewport={
    width: 400,
    height: 400
  });
  const page = await browser.newPage();
  await page.goto('https://vbet.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();