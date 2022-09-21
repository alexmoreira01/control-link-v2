import { Router } from "express";

import { linksRoutes } from "./links.routes";

const router = Router();

router.use("/link", linksRoutes)

export { router };