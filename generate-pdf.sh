#!/bin/bash
set -e

npm run dev < /dev/null > /dev/null 2>&1 &
SERVER_PID=$!

echo "Waiting for dev server..."
until curl -s http://localhost:5173 > /dev/null; do
  sleep 0.5
done

node --input-type=module --eval "import { generatePdf } from './node/html-to-pdf/index.js'; await generatePdf('http://localhost:5173/#/en/pdf', 'public/cv_en.pdf'); console.log('PDF saved to public/cv_en.pdf')"
node --input-type=module --eval "import { generatePdf } from './node/html-to-pdf/index.js'; await generatePdf('http://localhost:5173/#/fi/pdf', 'public/cv_fi.pdf'); console.log('PDF saved to public/cv_fi.pdf')"

pkill -f "vite"
