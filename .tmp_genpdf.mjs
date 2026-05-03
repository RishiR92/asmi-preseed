import puppeteer from 'puppeteer-core';
const url = 'http://localhost:8080/';
const out = '/mnt/documents/Asmi_Investor_Memo_v5.pdf';
const browser = await puppeteer.launch({ executablePath: '/bin/chromium', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1280, height: 1800, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1500));
const dims = await page.evaluate(() => {
  const b = document.body;
  return { w: 1280, h: Math.max(b.scrollHeight, document.documentElement.scrollHeight) };
});
await page.pdf({
  path: out,
  width: dims.w + 'px',
  height: dims.h + 'px',
  printBackground: true,
  pageRanges: '1',
  margin: { top: 0, right: 0, bottom: 0, left: 0 },
});
await browser.close();
console.log('OK', out, dims);
