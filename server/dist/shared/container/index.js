"use strict";

var _tsyringe = require("tsyringe");

var _LinksRepository = require("../../modules/links/repositories/LinksRepository");

_tsyringe.container.registerSingleton("LinksRepository", _LinksRepository.LinksRepository);