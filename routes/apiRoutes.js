const express = require('express');
const router = express.Router();
const { scrapeAndSave, getBooks } = require('../controllers/scraperController');

router.post('/scrape', scrapeAndSave);
//router.get('/scrape', scrapeAndSave);
router.get('/books', getBooks);

module.exports = router;
