import puppeteer from 'puppeteer';

/**
 * Generate a PDF from an HTML URL using Puppeteer.
 *
 * @param {string} url - The URL of the page to render as PDF.
 * @param {string} [outputPath] - File path to write the PDF to. If omitted, only the Buffer is returned.
 * @param {import('puppeteer').PDFOptions} [options] - Additional puppeteer PDF options (format, margin, scale, …).
 * @returns {Promise<Buffer>} The generated PDF as a Buffer.
 */
export async function generatePdf(url, outputPath, options = {}) {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  try {
    const page = await browser.newPage();
    await page.goto(url, { waitUntil: 'networkidle2' });
    const pdfOptions = {
      format: 'A4',
      printBackground: true,
      ...options,
      ...(outputPath ? { path: outputPath } : {}),
    };
    const buffer = await page.pdf(pdfOptions);
    return buffer;
  } finally {
    await browser.close();
  }
}
