const express = require("express");
const router = require("./routes/index.js");
const morgan = require("morgan");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(cors());

server.use(router);

module.exports = { server, upload };
