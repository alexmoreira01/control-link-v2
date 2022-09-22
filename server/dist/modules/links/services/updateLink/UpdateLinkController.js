"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpdateLinkController = void 0;

var _tsyringe = require("tsyringe");

var _UpdateLinkService = require("./UpdateLinkService");

class UpdateLinkController {
  async handle(request, response) {
    const updateLinkService = _tsyringe.container.resolve(_UpdateLinkService.UpdateLinkService);

    const linkId = request.params.id;
    const {
      label,
      url
    } = request.body;
    const id = Number(linkId);
    const result = await updateLinkService.execute({
      id,
      label,
      url
    });

    if (result === false) {
      return response.status(400).json({
        "erro": "Não foi possível atualizar, link não existente!"
      });
    }

    return response.status(201).json();
  }

}

exports.UpdateLinkController = UpdateLinkController;