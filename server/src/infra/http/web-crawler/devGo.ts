import * as fetch from 'node-fetch';
import * as cheerio from "cheerio";

const seenUrls = {};
const items = [];

const getUrl = (link: string) => {
    if (link.includes("https")){
        return link;

    }else if (link.startsWith("/")) {
        return `https://devgo.com.br${link}`;  

    } else {
        return `https://devgo.com.br/${link}`;
    }
}

const crawler = async ({ url }) => {
    if (seenUrls[url]) return;
    seenUrls[url] = true;

    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);

    $('.blog-article-card-title').each((i, element) => {
        const label = $(element).children('a').text();
        const link = getUrl($(element).children('a').attr('href'))

        items.push({
            label,
            link
        });
    });

    for (let i = 0; i<items.length; i++){
        console.log(items[i].label)
        console.log(items[i].link)
    }
    
    /* Para que o crawler acesse todos os links dentro da página 
    
    const links = $("a").map((i, link) => link.attribs.href).get();
   
    links.forEach((link) => {
        crawler({
            url: getUrl(link),
        });
    });

    */
}

crawler({
    url: "https://devgo.com.br/",
});