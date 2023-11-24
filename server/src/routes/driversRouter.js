const { Router } = require("express");
const upload = require("../server.js");
const getDrivers = require("../controllers/getDrivers.js");
const getDriversById = require("../controllers/getDriversById.js");
const postDrivers = require("../controllers/postDriver.js");
const deleteDriver = require("../controllers/deleteDriver.js");

const driversRouter = Router();

driversRouter.get("/", getDrivers);

driversRouter.get("/:idDriver", getDriversById);

driversRouter.post("/", upload.single("image"), postDrivers);

driversRouter.delete("/:idDriver", deleteDriver);

module.exports = driversRouter;
