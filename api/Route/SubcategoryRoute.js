const express = require("express");
const subcategry = require("../Controller/Subcategory");
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

router.get("/Getallsubcategory", verifytoken, subcategry.Getallsubcategory);
router.post("/Insertsubcategory", verifytoken, subcategry.insersubcaegory);
router.put("/updatesubcategory/:id", verifytoken, subcategry.updatesubcate);
router.delete("/Deletesubcategory/:id", verifytoken, subcategry.deletesubcate);
router.get("/Getonesubcategory/:id", verifytoken, subcategry.getonesubcategory);
router.get("/Getonesub/:id", verifytoken, subcategry.getsubcategory);
module.exports = {
  Route: router,
};
