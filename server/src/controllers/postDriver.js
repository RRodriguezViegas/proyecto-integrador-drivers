const { Driver, Team } = require("../db");
const multer = require("multer");
const { Op } = require("sequelize");
// const cloudinary = require("cloudinary").v2;
// const { CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET } =
//   process.env;
// cloudinary.config({
//   cloud_name: CLOUDINARY_CLOUD_NAME,
//   api_key: CLOUDINARY_API_KEY,
//   api_secret: CLOUDINARY_API_SECRET,
//   secure: true,
// });

// // upload image function
// const uploadImage = async imagePath => {
//   const options = {
//     use_filename: true,
//     unique_filename: false,
//     overwrite: true,
//   };

//   try {
//     const result = await cloudinary.uploader.upload(imagePath, options);
//     // console.log(result);
//     return result.secure_url;
//   } catch (error) {
//     console.error(error);
//   }
// };

// let imageName = "";

// const storage = multer.diskStorage({
//   destination: path.join("./image"),
//   filename: function (req, file, cb) {
//     imageName = Date.now() + path.extname(file.originalname);
//     cb(null, imageName);
//   },
// });

// const upload = multer({
//   storage: storage,
//   limits: { fileSize: 3000000 },
// }).single("myImage");

const postDriver = async (req, res) => {
  try {
    const ress = res.json({ picture: req.file.path });
    console.log(ress);
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

    res.status(201).json({ message: "OwO" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = postDriver;
