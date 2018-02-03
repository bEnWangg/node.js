  var request = require("request");
  var fs = require("fs");
  var cheerio = require("cheerio");
  request({
    url: "https://www.maicoin.com/zh-TW",
    method: "GET"
  }, function(e,r,b) {
    if(e || !b) { return; }
    var $ = cheerio.load(b);
    var result = [];
    var titles = $("li.item h2");
    for(var i=0;i<titles.length;i++) {
      result.push($(titles[i]).text());
    }
    fs.writeFileSync("result.json", JSON.stringify(result));
  });