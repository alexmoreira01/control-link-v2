"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportLinkService = void 0;

var fetch = _interopRequireWildcard(require("node-fetch"));

var cheerio = _interopRequireWildcard(require("cheerio"));

var _tsyringe = require("tsyringe");

var _ILinksRepository = require("../../repositories/ILinksRepository");

var _dec, _dec2, _dec3, _dec4, _class;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let ImportLinkService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("LinksRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ILinksRepository.ILinkRepository === "undefined" ? Object : _ILinksRepository.ILinkRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ImportLinkService {
  constructor(linksRepository) {
    this.linksRepository = linksRepository;

    this.getUrl = link => {
      if (link.includes("https")) {
        return link;
      } else if (link.startsWith("/")) {
        return `https://devgo.com.br${link}`;
      } else {
        return `https://devgo.com.br/${link}`;
      }
    };
  }

  async execute(url) {
    const seenUrls = {};
    const items = [];
    if (seenUrls[url]) return;
    console.log("crawling", url);
    seenUrls[url] = true;
    const response = await fetch(url);
    const html = await response.text();
    const $ = cheerio.load(html);
    $('.blog-article-card-title').each((i, element) => {
      const label = $(element).children('a').text();
      const link = this.getUrl($(element).children('a').attr('href'));
      items.push({
        label,
        link
      });
    });

    for (let i = 0; i < items.length; i++) {
      const linkAlreadyExists = await this.linksRepository.findLinkByLabel(items[i].label);

      if (linkAlreadyExists) {
        await this.linksRepository.updateLinkById(linkAlreadyExists.id, items[i].label, items[i].link);
      } else {
        await this.linksRepository.createLink(items[i].label, items[i].link);
      }
    }

    return true;
  }

}) || _class) || _class) || _class) || _class);
exports.ImportLinkService = ImportLinkService;