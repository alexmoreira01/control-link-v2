"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImportLinkController = void 0;

var _tsyringe = require("tsyringe");

var _ImportLinkService = require("./ImportLinkService");

class ImportLinkController {
  async handle(request, response) {
    const importLinkService = _tsyringe.container.resolve(_ImportLinkService.ImportLinkService);

    const {
      url
    } = request.body;
    const result = await importLinkService.execute(url);

    if (result === false) {
      return response.status(400).json({
        "erro": "Não foi possível importar os links"
      });
    }

    return response.status(201).send();
  }

}

exports.ImportLinkController = ImportLinkController;