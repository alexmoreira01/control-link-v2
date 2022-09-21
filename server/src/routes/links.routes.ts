import { Router } from "express";

import { FindLinksController } from "../modules/links/services/findLink/FindLinksController";
import { CreateLinkController } from "../modules/links/services/createLink/CreateLinkController";
import { UpdateLinkController } from "../modules/links/services/updateLink/UpdateLinkController";
import { DeleteLinkController } from "../modules/links/services/deleteLink/DeleteLinkController";

const linksRoutes = Router();

const findLinkController = new FindLinksController();
const createLinkController = new CreateLinkController();
const updateLinkController = new UpdateLinkController();
const deleteLinkController = new DeleteLinkController();

linksRoutes.get('/find', findLinkController.handle);
linksRoutes.post('/create', createLinkController.handle);
linksRoutes.put('/update/:id', updateLinkController.handle);
linksRoutes.delete('/delete/:id', deleteLinkController.handle);

export { linksRoutes }