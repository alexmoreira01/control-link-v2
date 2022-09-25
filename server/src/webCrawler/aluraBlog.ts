import * as fetch from 'node-fetch';
import * as cheerio from "cheerio";

const seenUrls = {};

const labels = []
const links = [];

const getUrl = (link: string) => {
    if (link.includes("https")){
        return link;

    }else if (link.startsWith("/")) {
        return `https://www.alura.com.br${link}`;  

    } else {
        return `https://www.alura.com.br/${link}`;
    }
}

const crawl = async ({ url }) => {
    if (seenUrls[url]) return;
    console.log("crawling", url);
    seenUrls[url] = true;

    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    const links = $(".article__item a")
    .map((i, link) => getUrl(link.attribs.href))
    .get();

    const labels = $(".article__title")
    .map((i, label) => label.attribs.title)
    .get();

    for (let i = 0; i<links.length; i++){
        console.log(labels[i])
        console.log(links[i])
        console.log(" ______ ")
    }
}

crawl({
    url: "https://www.alura.com.br/artigos",
});