const { Driver, Team } = require("../db");
const multer = require("multer");
const { Op } = require("sequelize");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const postDriver = async (req, res) => {
  // try {
  try {
    if (req.file) {
      // console.log(req);
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log("resultado de cloudinary", result);
    } else {
      res.status(404).send({ status: "error", message: `File not found!` });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "err", error: err });
  }
  // if (!name || !surname || !nationality || !dob) {
  //   return res.status(400).json({ error: "Faltan datos obligatorios" });
  // }

  // upload(image, res, err => {
  //   if (err) {
  //     console.log(err);
  //   } else {
  //     return res.status(201).json({
  //       url: "https://pi-drivers-backend.onrender.com/image/" + imageName,
  //     });
  //   }
  // });

  // if (image) {
  //   const result = await uploadImage(image);
  //   image = result;
  // }

  // const newDriver = await Driver.create({
  //   name,
  //   surname,
  //   description,
  //   // image,
  //   nationality,
  //   dob,
  // });

  // const teamObjects = await Team.findAll({
  //   where: {
  //     nombre: {
  //       [Op.in]: teams,
  //     },
  //   },
  // });

  // await newDriver.setTeams(teamObjects);

  //   res.status(201).json({ message: "OwO" });
  // } catch (error) {
  //   res.status(400).json({ error: error.message });
  // }
};

module.exports = postDriver;
