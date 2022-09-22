"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteLinkController = void 0;

var _tsyringe = require("tsyringe");

var _DeleteLinkService = require("./DeleteLinkService");

class DeleteLinkController {
  async handle(request, response) {
    const deleteLinkService = _tsyringe.container.resolve(_DeleteLinkService.DeleteLinkService);

    const linkId = request.params.id;
    const id = Number(linkId);
    const result = await deleteLinkService.execute({
      id
    });

    if (result === false) {
      return response.status(400).json({
        "erro": "Link não existente!"
      });
    }

    return response.status(200).send();
  }

}

exports.DeleteLinkController = DeleteLinkController;