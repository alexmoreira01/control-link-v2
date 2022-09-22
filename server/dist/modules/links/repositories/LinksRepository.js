"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinksRepository = void 0;

var _database = _interopRequireDefault(require("../../../database"));

var _Links = require("../../../database/entities/Links");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class LinksRepository {
  constructor() {
    this.repository = void 0;
    this.repository = _database.default.getRepository(_Links.Links);
  }

  async createLink(label, url) {
    const createLink = this.repository.create({
      label,
      url
    });
    await this.repository.save(createLink);
  }

  async listLinks() {
    const allLinks = await this.repository.createQueryBuilder().orderBy("id", "DESC").getMany();
    return allLinks;
  }

  async findLinkById(id) {
    const linkExists = await this.repository.findOneBy({
      id
    });
    return linkExists;
  }

  async findLinkByLabel(label) {
    const link = await this.repository.findOneBy({
      label: label
    });
    return link;
  }

  async updateLinkById(id, label, url) {
    const update = await this.repository.createQueryBuilder().update().set({
      label: label,
      url: url
    }).where("id = :id").setParameters({
      id
    }).execute();
  }

  async deleteLinkById(id) {
    const linkRemove = await this.repository.findOneBy({
      id
    });
    await this.repository.remove(linkRemove);
  }

}

exports.LinksRepository = LinksRepository;