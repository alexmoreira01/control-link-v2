"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListLinksController = void 0;

var _tsyringe = require("tsyringe");

var _ListLinksService = require("./ListLinksService");

class ListLinksController {
  async handle(request, response) {
    const listLinksService = _tsyringe.container.resolve(_ListLinksService.ListLinksService);

    const links = await listLinksService.execute();
    return response.json(links);
  }

}

exports.ListLinksController = ListLinksController;