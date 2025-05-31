const scrapeBooks = require('../utils/scraper');
const Book = require('../models/Book');

/*exports.scrapeAndSave = async (req, res) => {
    try {
        const books = await scrapeBooks();
        await Book.insertMany(books);
        res.json({ message: 'Scraping successful', count: books.length });
    } catch (error) {
        res.status(500).json({ error: 'Scraping failed' });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ scrapedAt: -1 });
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: 'Fetch failed' });
    }
};*/

/*exports.scrapeAndSave = async (req, res) => {
    try {
        const books = await scrapeBooks();
        console.log("Scraped books:", books.length);
        await Book.insertMany(books);
        res.json({ message: 'Scraping successful', count: books.length });
    } catch (error) {
        console.error("Scraping Error:", error); // 🔍 LOG THIS
        res.status(500).json({ error: 'Scraping failed' });
    }
};

exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find().sort({ scrapedAt: -1 });
        res.json(books);
    } catch (err) {
        console.error("Fetch Error:", err); // 🔍 LOG THIS
        res.status(500).json({ error: 'Fetch failed' });
    }
};*/


/*exports.scrapeAndSave = async (req, res) => {
  try {
    const books = await scrapeBooks();

    // ✅ Delete all previously stored books
    await Book.deleteMany({});

    // ✅ Insert freshly scraped books
    await Book.insertMany(books);

    res.json({ message: 'Scraping successful', count: books.length });
  } catch (error) {
    console.error("Scraping Error:", error);
    res.status(500).json({ error: 'Scraping failed' });
  }
};*/

/*exports.scrapeAndSave = async (req, res) => {
    try {
        const books = await scrapeBooks();
        await Book.insertMany(books);
        res.json({ message: 'Scraping successful', count: books.length });
    } catch (error) {
        console.error("🔥 Scraping Error:", error); // ✅ Log exact error
        res.status(500).json({ error: 'Scraping failed', details: error.message }); // show details
    }
};*/

exports.scrapeAndSave = async (req, res) => {
    try {
        const books = await scrapeBooks();

        await Book.deleteMany({}); // 🧹 Clear old scraped data before saving new

        await Book.insertMany(books);

        res.json({ message: 'Scraping successful', count: books.length });
    } catch (error) {
        console.error("🔥 Scraping Error:", error);
        res.status(500).json({ error: 'Scraping failed', details: error.message });
    }
};



exports.getBooks = async (req, res) => {
  try {
    const books = await Book.find().sort({ scrapedAt: -1 });
    res.json(books);
  } catch (err) {
    console.error("Fetch Error:", err);
    res.status(500).json({ error: 'Fetch failed' });
  }
};


