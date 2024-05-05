const puppeteer = require('puppeteer')
exports.index = async(req,res)=>{
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.amazon.in/s?hidden-keywords=B0CHY4KRBT%7CB0BRKXXPZ7%7CB0B5LVS732%7CB0BF563HB4%7CB08YNSQDJ4%7CB0CHY1ZVXM%7CB0CHY3LN62%7CB0CVN3NK42%7CB0CHY1NVLP%7CB0CG1X67V1%7CB0B852Z6GY%7CB0CH8BY8DG%7CB0CHY2VRLF%7CB0BDK89GL2%7CB0CHY2PD6V%7CB0BRQFNHQS%7CB0CHY22BSV%7CB0B3RRWSF6%7CB0CHY32Q5T%7CB0CHXZY62G%7CB0CHY3GK4T%7CB0CHY11Z6T%7CB0BJ72WZQ7%7CB0BF54972T%7CB09DG4FJTB%7CB0BN1X7ZVT%7CB0BRMYD4XZ%7CB0CHY1YWY2%7CB0BF4YBLPX%7CB0B5LW5DFQ%7CB0CHY1PQJ8%7CB0CHY13JX8%7CB0CHY2WK67%7CB0B6BPX5S9%7CB0CHXY64PV%7CB0CQ4KTCH1%7CB0C497MSQN%7CB0BRKYMS7Y%7CB0CHY1Z4RX%7CB0B853MRMY%7CB0C5X2MGX3%7CB0BMVT1R78%7CB0BVR4DSGB%7CB0BY2NM7C8%7CB0CQ4JT6NT%7CB0CHY26LK8%7CB0B3N7LR6K%7CB0CHY1SNJ2%7CB0B6BQ711Q%7CB0C4T9J84B%7CB0C5D7LV7V%7CB0CPPJ4YH8%7CB0CH8MRQ1Q%7CB0BVR8CGJW%7CB0BRKZG8GH%7CB09DG72CFB%7CB0CHY4FRTG%7CB0CHY11W7J%7CB096VF5YYF%7CB0C4Q6DMT6%7CB0CHY34RBM%7CB0CVN3PBF8%7CB0BVR92TZK%7CB0CHY4HZCQ%7CB0B3RS9DNF%7CB0CHY2CX9W%7CB0BRQFWJ35%7CB0C496V772%7CB0CCNJH3SQ%7CB0B85414K1%7CB0CCNKMBS1%7CB0CHY1V4FX%7CB0B3RSDSZ3%7CB0CHY1Z3FW%7CB0B855X6W2%7CB0CG1Y3336%7CB0C497XVG9%7CB0CH88VB4S%7CB0CHY1WVGY%7CB0CR3C4GNW&content-id=amzn1.sym.8e4f00b6-f4ee-4905-ab2f-7330c6599880&pd_rd_r=d2496d3c-b537-42dc-9f94-1aa144e1aff4&pd_rd_w=ETxEf&pd_rd_wg=IwdgQ&pf_rd_p=8e4f00b6-f4ee-4905-ab2f-7330c6599880&pf_rd_r=3BSHARBN2DG273GEHXA1');

        
        const data = await page.evaluate(() => {
          return Array.from(document.querySelectorAll('.sg-col-4-of-24.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20'), (e) => ({
            title: e.querySelector('.a-size-base-plus.a-color-base.a-text-normal')  != null ? e.querySelector('.a-size-base-plus.a-color-base.a-text-normal').innerText : "N/A",
            price: e.querySelector('span.a-price-whole') != null ? e.querySelector('span.a-price-whole').innerText :'N/A',
            MRP: e.querySelector('span.a-price.a-text-price .a-offscreen') != null ? e.querySelector('span.a-price.a-text-price .a-offscreen').innerText :'N/A',
            image: e.querySelector('img.s-image') != null ? e.querySelector('.s-image').src : "N/A",
            link: e.querySelector('.a-link-normal') != null ? e.querySelector('.a-link-normal').href : 'N/A' ,
            rating: e.querySelector('.a-icon-star-small .a-icon-alt')  != null ? e.querySelector('.a-icon-star-small .a-icon-alt').innerText : 'N/A'
          }));
        });
        
        await browser.close();
        res.json({success: true,data: data});
      } catch (error) {
        console.log(error.message);
      }
}