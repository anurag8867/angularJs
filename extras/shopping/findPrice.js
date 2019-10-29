const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom = new JSDOM(``, {
  url: "https://www.amazon.in/s?i=apparel&bbn=1968122031&rh=n%3A1571271031%2Cn%3A1571272031%2Cn%3A1968024031%2Cn%3A1968120031%2Cn%3A1968122031%2Cp_n_feature_nine_browse-bin%3A1974974031%2Cp_89%3AJack+%26+Jones&s=price-asc-rank&dc&qid=1565502698&rnid=3837712031&ref=sr_nr_p_89_4",
  referrer: "https://www.amazon.in/s?i=apparel&bbn=1968122031&rh=n%3A1571271031%2Cn%3A1571272031%2Cn%3A1968024031%2Cn%3A1968120031%2Cn%3A1968122031%2Cp_n_feature_nine_browse-bin%3A1974974031%2Cp_89%3AJack+%26+Jones&s=price-asc-rank&dc&qid=1565502698&rnid=3837712031&ref=sr_nr_p_89_4",
  contentType: "text/html",
  includeNodeLocations: true,
  storageQuota: 10000000
});

console.log(dom.window.document.location);
// console.log(dom.window.document.querySelector("p").textContent);
// const dom = new JSDOM(``, {
//   url: "https://example.org/",
//   referrer: "https://example.com/",
//   contentType: "text/html",
//   includeNodeLocations: true,
//   storageQuota: 10000000
// });









































// const apiRepsonse = require("./apiResponse.html");
// // const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
// console.log(dom.window.document.querySelector("p").textContent);
