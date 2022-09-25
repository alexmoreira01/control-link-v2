"use strict";

var fetch = _interopRequireWildcard(require("node-fetch"));

var cheerio = _interopRequireWildcard(require("cheerio"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const seenUrls = {};
const items = [];

const getUrl = link => {
  if (link.includes("https")) {
    return link;
  } else if (link.startsWith("/")) {
    return `https://devgo.com.br${link}`;
  } else {
    return `https://devgo.com.br/${link}`;
  }
};

const crawler = async ({
  url
}) => {
  if (seenUrls[url]) return;
  seenUrls[url] = true;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  $('.blog-article-card-title').each((i, element) => {
    const label = $(element).children('a').text();
    const link = getUrl($(element).children('a').attr('href'));
    items.push({
      label,
      link
    });
  });

  for (let i = 0; i < items.length; i++) {
    console.log(items[i].label);
    console.log(items[i].link);
  }
  /* Para que o crawler acesse todos os links dentro da página 
  
  const links = $("a").map((i, link) => link.attribs.href).get();
  
  links.forEach((link) => {
      crawler({
          url: getUrl(link),
      });
  });
    */

};

crawler({
  url: "https://devgo.com.br/"
});