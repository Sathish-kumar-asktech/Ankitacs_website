const express = require("express");
const subcategry = require("../Controller/Category");
const jwt = require("jsonwebtoken");

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

router.get("/GetallCategory", verifytoken, subcategry.GetallCategory);
router.get(
  "/GetallActiveMainCategory",
  verifytoken,
  subcategry.GetallActiveMainCategory
);
router.post("/InsertCategory", verifytoken, subcategry.insersubcaegory);
router.put("/updateCategory/:id", verifytoken, subcategry.updatesubcate);
router.delete("/DeleteCategory/:id", verifytoken, subcategry.deletesubcate);
router.get("/GetoneCategory/:id", verifytoken, subcategry.getoneCategory);
router.get("/Getonesub/:id", verifytoken, subcategry.getCategory);
module.exports = {
  Route: router,
};
