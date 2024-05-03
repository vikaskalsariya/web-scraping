<h1>Amazon Web Scraper</h1>
This is a simple web scraping script using Puppeteer to extract information from Amazon India search results.

Installation :

1. Clone the repository:
```sh
git clone https://github.com/vikaskalsariya/web-scraping.git
```

2. Install dependencies:
```sh
npm install
```

Usage :

1. Run the script:

```sh
npm start
```


2. The script will launch a headless browser, navigate to the specified Amazon search results page, scrape the data, and then close the browser.
3. The scraped data will be displayed in the console and also returned as a JSON object.

<h3>Data Scraped</h3>
- Title: The product title.<br>
- Price: The current price of the product.<br>
- MRP: The Maximum Retail Price (MRP) of the product.<br>
- Image: The URL of the product image.<br>
- Link: The URL of the product page.<br>
- Rating: The product rating.<br>