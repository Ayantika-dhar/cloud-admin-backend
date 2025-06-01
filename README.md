# Cloud Admin Panel - Backend

This repository contains the backend implementation for the Cloud Admin Panel, a full-stack web application that scrapes book data from a public source and stores it in MongoDB for administrative viewing and analysis.

## Features

- Scrapes book titles and prices from [books.toscrape.com](https://books.toscrape.com)
- Stores data in MongoDB Atlas
- RESTful API built using Express.js
- Supports GET and POST requests
- Automatically clears old data on each scrape to ensure fresh results

## Technology Stack

- Node.js
- Express.js
- Cheerio (for web scraping)
- Axios
- MongoDB Atlas
- Mongoose

## API Endpoints

### `POST /api/scrape`

Scrapes book data and stores it in the database. Old data is cleared before new insertion.

**Response:**
```json
{
  "message": "Scraping successful",
  "count": 20
}
```

### `GET /api/books`

Returns all books currently stored in the MongoDB database.

**Response:**
```json
[
  {
    "title": "Book Title",
    "price": "£39.95"
  },
  ...
]
```

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- MongoDB Atlas account

### Environment Variables

Create a `.env` file at the root of the project with the following:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

### Installation

```bash
git clone https://github.com/Ayantika-dhar/cloud-admin-backend.git
cd cloud-admin-backend
npm install
```

### Running the Server

```bash
npm start
```

By default, the server runs at `http://localhost:5000`.

## Deployment

This backend is deployed to **Render**:

**Live API Base URL**:  
`https://cloud-admin-backend-ff8y.onrender.com`

## Project Structure

```
cloud-admin-backend/
├── controllers/
│   └── scraperController.js
├── models/
│   └── Book.js
├── routes/
│   └── apiRoutes.js
├── utils/
│   └── scraper.js
├── .env
├── app.js
└── package.json
```

## License

This project is developed for academic and demonstration purposose.
Ayantika Dhar
adhar9267@gmail.com
