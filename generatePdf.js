import { readFileSync, writeFileSync } from 'fs'
import { resolve, basename, dirname, join } from 'path'
import { buildPdf } from './src/buildPdf.js'

const inputPath = process.argv[2]
if (!inputPath) {
  console.error('Usage: node generatePdf.js <path-to-cv.json>')
  process.exit(1)
}

const cv = JSON.parse(readFileSync(resolve(inputPath), 'utf-8'))
const outputPath = join(dirname(resolve(inputPath)), basename(inputPath, '.json') + '.pdf')

const doc = buildPdf(cv)
const buffer = doc.output('arraybuffer')
writeFileSync(outputPath, Buffer.from(buffer))
console.log(`PDF written to: ${outputPath}`)
