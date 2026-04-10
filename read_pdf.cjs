const fs = require('fs');
const pdf = require('pdf-parse');

const files = [
  'C:\\Users\\mohda\\OneDrive\\Desktop\\New folder (3)\\Azhar_Mahmood_CV complt (3).pdf',
  'C:\\Users\\mohda\\OneDrive\\Desktop\\New folder (3)\\DOC-20260209-WA0009..pdf',
  'C:\\Users\\mohda\\OneDrive\\Desktop\\New folder (3)\\ameer hamza cv 2.pdf',
  'C:\\Users\\mohda\\OneDrive\\Desktop\\New folder (3)\\tariq rizwee cv.pdf'
];

async function parseAll() {
  for (const file of files) {
    try {
      const dataBuffer = fs.readFileSync(file);
      const data = await pdf(dataBuffer);
      console.log(`\n--- CONTENT OF: ${file} ---`);
      console.log(data.text.substring(0, 500)); // Print up to 500 characters
    } catch (err) {
      console.error(`Error parsing ${file}:`, err.message);
    }
  }
}

parseAll();
