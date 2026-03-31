import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const dir = path.join(__dirname, '..', 'public', 'brochures')
fs.mkdirSync(dir, { recursive: true })

const lines = [
  '%PDF-1.4',
  '1 0 obj<</Type/Catalog/Pages 2 0 R>>endobj',
  '2 0 obj<</Type/Pages/Kids[3 0 R]/Count 1>>endobj',
  '3 0 obj<</Type/Page/MediaBox[0 0 612 792]/Parent 2 0 R/Resources<<>>>>endobj',
  'xref',
  '0 4',
  '0000000000 65535 f ',
  '0000000009 00000 n ',
  '0000000058 00000 n ',
  '0000000115 00000 n ',
  'trailer<</Size 4/Root 1 0 R>>',
  'startxref',
  '190',
  '%%EOF',
]
const pdf = Buffer.from(lines.join('\r\n'), 'utf8')
fs.writeFileSync(path.join(dir, 'office-cabinets-brochure.pdf'), pdf)
fs.writeFileSync(path.join(dir, 'lockers-brochure.pdf'), pdf)
console.log('Brochure placeholders written:', pdf.length, 'bytes')
