const { Router } = require("express");
const getDrivers = require("../controllers/getDrivers.js");
const getDriversById = require("../controllers/getDriversById.js");
const postDrivers = require("../controllers/postDriver.js");
const deleteDriver = require("../controllers/deleteDriver.js");

const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "YOUR_CLOUD_NAME",
  api_key: "YOUR_API_KEY",
  api_secret: "YOUR_API_SECRET",
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  },
});

const upload = multer({ storage: storage });

const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const driversRouter = Router();

driversRouter.get("/", getDrivers);

driversRouter.get("/:idDriver", getDriversById);

driversRouter.post("/", upload.single("image"), postDrivers);

driversRouter.delete("/:idDriver", deleteDriver);

module.exports = driversRouter;
