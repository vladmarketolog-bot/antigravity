const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'index.html');
console.log(`Processing file: ${filePath}`);

try {
    let content = fs.readFileSync(filePath, 'utf8');

    // Regex to remove data-cms and data-cms-visible attributes
    // Matches whitespace followed by the attribute, handling quotes
    const cmsRegex = /\s+data-cms="[^"]*"/g;
    const cmsVisibleRegex = /\s+data-cms-visible="[^"]*"/g;

    const newContent = content
        .replace(cmsRegex, '')
        .replace(cmsVisibleRegex, '');

    if (content.length !== newContent.length) {
        fs.writeFileSync(filePath, newContent);
        console.log('Successfully removed CMS attributes from index.html');
    } else {
        console.log('No CMS attributes found to remove.');
    }
} catch (error) {
    console.error('Error processing file:', error);
}
