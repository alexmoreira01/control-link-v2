import { Router } from "express";

import { CreateLinkController } from "../controllers/create-link-controller";
import { ListLinksController } from "../controllers/list-links-controller";
import { FindLinkController } from "../controllers/find-link-controller";
import { DeleteLinkController } from "../controllers/delete-link-controller";
import { ImportLinkController } from "../controllers/import-link-controller";
import { UpdateLinkController } from "../controllers/update-link-controller";


const linksRoutes = Router();

const createLinkController = new CreateLinkController();
const listLinkController = new ListLinksController();
const findLinkController = new FindLinkController();
const updateLinkController = new UpdateLinkController();
const deleteLinkController = new DeleteLinkController();
const importLinkController = new ImportLinkController();

linksRoutes.post('/', createLinkController.handle);
linksRoutes.get('/list', listLinkController.handle);
linksRoutes.get('/find/:id', findLinkController.handle);
linksRoutes.put('/update/:id', updateLinkController.handle);
linksRoutes.delete('/delete/:id', deleteLinkController.handle);
linksRoutes.post('/devGo/import', importLinkController.handle);

export { linksRoutes }