"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteLinkService = void 0;

var _tsyringe = require("tsyringe");

var _ILinksRepository = require("../../repositories/ILinksRepository");

var _dec, _dec2, _dec3, _dec4, _class;

let DeleteLinkService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)("LinksRepository")(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _ILinksRepository.ILinkRepository === "undefined" ? Object : _ILinksRepository.ILinkRepository]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class DeleteLinkService {
  constructor(linksRepository) {
    this.linksRepository = linksRepository;
  }

  async execute({
    id
  }) {
    const linkExists = await this.linksRepository.findLinkById(id);

    if (linkExists) {
      await this.linksRepository.deleteLinkById(id);
      return true;
    } else {
      return false;
    }
  }

}) || _class) || _class) || _class) || _class);
exports.DeleteLinkService = DeleteLinkService;