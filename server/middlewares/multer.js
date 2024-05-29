const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    const filename = Date.now() + Math.random();
    const ext = path.extname(file.originalname);

    const validMimeTypes = ["image/jpg", "image/jpeg", "image/png", "image/pdf"];

    if (validMimeTypes.includes(file.mimetype)) {
      cb(null, `${filename}${ext}`);
    } else {
      cb(new Error("Only .jpg | .jpeg | .png are valid files"));
    }
  },
});

const maxSize = 900 * 1000 * 1000; 

const uploader = multer({
  storage,
  limits: {
    fileSize: maxSize,
  },
});

module.exports = uploader;