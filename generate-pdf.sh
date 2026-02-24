#!/bin/bash
set -e
set -m

npm run dev < /dev/null > /dev/null 2>&1 &
SERVER_PID=$!

set +m

echo "Waiting for dev server..."
until curl -s http://localhost:5173 > /dev/null; do
  sleep 0.5
done

node --input-type=module --eval "import { generatePdf } from './node/html-to-pdf/index.js'; await generatePdf('http://localhost:5173', 'public/cv.pdf'); console.log('PDF saved to public/cv.pdf')"

kill -- -$SERVER_PID
