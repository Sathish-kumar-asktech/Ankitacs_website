const express = require("express");
const MainCategory = require("../Controller/MainCategory");
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

router.get(
  "/GetallActiveMainCategory",
  verifytoken,
  MainCategory.GetallActiveMainCategory
);
router.get("/Getallmaincatogry", verifytoken, MainCategory.GetallMainCategorys);
router.get(
  "/GetoneMainCategory/:id",
  verifytoken,
  MainCategory.GetoneMainCategory
);
router.post("/InsertCategory", verifytoken, MainCategory.InsertCategory);
router.put("/updateCategory/:id", verifytoken, MainCategory.UpdateCategory);
router.delete("/DeleteCategory/:id", verifytoken, MainCategory.DeleteCategory);

module.exports = {
  Route: router,
};
