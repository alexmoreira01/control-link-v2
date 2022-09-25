import { Router } from "express";

import { ListLinksController } from "../modules/links/services/listLinks/ListLinksController";
import { FindLinkController } from "../modules/links/services/findLink/FindLinkController";
import { CreateLinkController } from "../modules/links/services/createLink/CreateLinkController";
import { UpdateLinkController } from "../modules/links/services/updateLink/UpdateLinkController";
import { DeleteLinkController } from "../modules/links/services/deleteLink/DeleteLinkController";
import { ImportLinkController } from "../modules/links/services/importLink/ImportLinkController";


const linksRoutes = Router();

const listLinkController = new ListLinksController();
const findLinkController = new FindLinkController();
const createLinkController = new CreateLinkController();
const updateLinkController = new UpdateLinkController();
const deleteLinkController = new DeleteLinkController();
const importLinkController = new ImportLinkController();

linksRoutes.get('/list', listLinkController.handle);
linksRoutes.get('/find/:id', findLinkController.handle);
linksRoutes.post('/create', createLinkController.handle);
linksRoutes.put('/update/:id', updateLinkController.handle);
linksRoutes.delete('/delete/:id', deleteLinkController.handle);
linksRoutes.post('/devGo/import', importLinkController.handle);

export { linksRoutes }