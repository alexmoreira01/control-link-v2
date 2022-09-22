"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linksRoutes = void 0;

var _express = require("express");

var _ListLinksController = require("../modules/links/services/listLinks/ListLinksController");

var _FindLinkController = require("../modules/links/services/findLink/FindLinkController");

var _CreateLinkController = require("../modules/links/services/createLink/CreateLinkController");

var _UpdateLinkController = require("../modules/links/services/updateLink/UpdateLinkController");

var _DeleteLinkController = require("../modules/links/services/deleteLink/DeleteLinkController");

const linksRoutes = (0, _express.Router)();
exports.linksRoutes = linksRoutes;
const listLinkController = new _ListLinksController.ListLinksController();
const findLinkController = new _FindLinkController.FindLinkController();
const createLinkController = new _CreateLinkController.CreateLinkController();
const updateLinkController = new _UpdateLinkController.UpdateLinkController();
const deleteLinkController = new _DeleteLinkController.DeleteLinkController();
linksRoutes.get('/list', listLinkController.handle);
linksRoutes.get('/find/:id', findLinkController.handle);
linksRoutes.post('/create', createLinkController.handle);
linksRoutes.put('/update/:id', updateLinkController.handle);
linksRoutes.delete('/delete/:id', deleteLinkController.handle);