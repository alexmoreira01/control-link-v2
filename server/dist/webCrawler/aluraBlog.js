"use strict";

var fetch = _interopRequireWildcard(require("node-fetch"));

var cheerio = _interopRequireWildcard(require("cheerio"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const seenUrls = {};
const labels = [];
const links = [];

const getUrl = link => {
  if (link.includes("https")) {
    return link;
  } else if (link.startsWith("/")) {
    return `https://www.alura.com.br${link}`;
  } else {
    return `https://www.alura.com.br/${link}`;
  }
};

const crawl = async ({
  url
}) => {
  if (seenUrls[url]) return;
  console.log("crawling", url);
  seenUrls[url] = true;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const links = $(".article__item a").map((i, link) => getUrl(link.attribs.href)).get();
  const labels = $(".article__title").map((i, label) => label.attribs.title).get();

  for (let i = 0; i < links.length; i++) {
    console.log(labels[i]);
    console.log(links[i]);
    console.log(" ______ ");
  }
};

crawl({
  url: "https://www.alura.com.br/artigos"
});