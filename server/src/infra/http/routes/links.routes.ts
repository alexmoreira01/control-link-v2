import { Router } from "express";

import { CreateLinkController } from "../controllers/CreateLinkController";
import { DeleteLinkController } from "../controllers/DeleteLinkController";
import { FindLinkController } from "../controllers/FindLinkController";
import { ImportLinkController } from "../controllers/ImportLinkController";
import { ListLinksController } from "../controllers/ListLinksController";
import { UpdateLinkController } from "../controllers/UpdateLinkController";


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