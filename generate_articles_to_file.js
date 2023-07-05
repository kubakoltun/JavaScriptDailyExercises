const fs = require('fs');
const stream = fs.createWriteStream('Towary.txt');

for (let i = 1; i <= 10000; i++) {
    let weight = Math.floor((Math.random() * 100) + 10);
    let articles = `${i} ${waga}\n`;

    stream.write(articles, 'utf-8', (err) => {
        if (err) {
            console.error(`Writing error ${err}`);
        }
    });
}

stream.end();
