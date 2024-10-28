const express = require("express");
const productcontroller = require("../Controller/productcontroller");
const jwt = require("jsonwebtoken");
const ProductData = require("../Data/Product");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

function verifytoken(req, res, next) {
  const beareHeader = req.headers["authorization"];
  if (typeof beareHeader != "undefined") {
    const bearer = beareHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    jwt.verify(bearerToken, "secretkey", (err, user) => {
      if (err) {
        res.json({ error: "unauthorzhied user" });
      } else {
        next();
      }
    });
  } else {
    res.json({
      error: "Unauthorized user",
    });
  }
}

const router = express.Router();
const storage = multer.diskStorage({
  destination: "./Public",
  filename: (req, file, cb) => {
    return cb(
      null,
      `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`
    );
  },
});
const fillefilter = (req, file, cb) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};
const upload = multer({
  storage: storage,
  fileFilter: fillefilter,
}).fields([{ name: "Image", maxCount: 1 }]);

router.post("/Insertproduct", verifytoken, upload, async (req, res) => {
  try {
    let img1 = "";

    const image1 = req.files.Image;
    console.log(req.files.Image);
    if (image1) {
      image1.map((data) => {
        // console.log(data.encoding)
        img1 = `${data.filename}`;
      });
      console.log(img1);
    } else {
      img1 = "";
    }
    const purchasedata = req.body;
    const product = await ProductData.Insertproduct(purchasedata, img1);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error.message);
  }
});

router.put("/Updateproduct", verifytoken, upload, async (req, res) => {
  try {
    let img1 = "";

    const image1 = req.files.Image;
    if (typeof image1 === "object") {
      image1.map((data) => {
        img1 = `${data.filename}`;
      });
    } else {
      img1 = `${req.body.Image}`;
    }
    const purchasedata = req.body;
    const product = await ProductData.updateproduct(purchasedata, img1);
    res.send(product);
  } catch (error) {
    res.status(400).send(error.message);
    console.log(error.message);
  }
});

router.get(
  "/GetallActiveProducts",
  verifytoken,
  productcontroller.GetallActiveProducts
);
router.get("/getallproducts", verifytoken, productcontroller.getallproduct);
router.delete(
  "/Deleteproduct/:id",
  verifytoken,
  productcontroller.deleteproduct
);
router.get("/Getoneproduct/:id", verifytoken, productcontroller.getoneproducts);
router.get(
  "/GetProductByCatgory/:id",
  verifytoken,
  productcontroller.GetProductByCatgory
);
module.exports = {
  Route: router,
};
