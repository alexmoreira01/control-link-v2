"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateLinkController = void 0;

var _tsyringe = require("tsyringe");

var _CreateLinkService = require("./CreateLinkService");

class CreateLinkController {
  async handle(request, response) {
    const createLinkService = _tsyringe.container.resolve(_CreateLinkService.CreateLinkService);

    const {
      label,
      url
    } = request.body;
    const result = await createLinkService.execute({
      label,
      url
    });

    if (result === false) {
      return response.status(400).json({
        "erro": "Título ja existente!"
      });
    }

    return response.status(201).send();
  }

}

exports.CreateLinkController = CreateLinkController;