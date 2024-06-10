const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);

    const validMimeTypes = ["image/jpg", "image/jpeg", "image/png", "application/pdf"];

    if (validMimeTypes.includes(file.mimetype)) {
      if (file.fieldname === `${Date.now() + '-' + Math.round(Math.random() * 1E9)}payment`) {
        cb(null, `payment${ext}`);
      } else {
        const filename = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${filename}${ext}`);
      }
    } else {
      cb(new Error("Only .jpg | .jpeg | .png | .pdf files are allowed"));
    }
  },
});

const maxSize = 900 * 1000 * 1000; // 900 MB

const uploader = multer({
  storage,
  limits: {
    fileSize: maxSize,
  },
});

module.exports = uploader;
