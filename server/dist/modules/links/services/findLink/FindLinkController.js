"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FindLinkController = void 0;

var _tsyringe = require("tsyringe");

var _FindLinkService = require("./FindLinkService");

class FindLinkController {
  async handle(request, response) {
    const findLinkService = _tsyringe.container.resolve(_FindLinkService.FindLinkService);

    const linkId = request.params.id;
    const id = Number(linkId);
    const links = await findLinkService.execute(id);
    return response.json(links);
  }

}

exports.FindLinkController = FindLinkController;