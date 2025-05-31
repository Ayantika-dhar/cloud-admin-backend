const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeBooks() {
    const url = 'https://books.toscrape.com/';
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    const books = [];
    $('.product_pod').each((_, el) => {
        const title = $(el).find('h3 a').attr('title');
        const price = $(el).find('.price_color').text();
        books.push({ title, price });
    });

    return books;
}

module.exports = scrapeBooks;
