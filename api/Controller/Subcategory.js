const subcat = require("../Data/Subcategory");
const jwt = require("jsonwebtoken");

const Getallsubcategory = async (req, res, next) => {
  try {
    const userdata = await subcat.Getallsubcat();
    res.send(userdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const insersubcaegory = async (req, res, next) => {
  try {
    const subcatdata = req.body;
    const insert = await subcat.Insertsubcategory(subcatdata);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const updatesubcate = async (req, res, next) => {
  try {
    const Category_Id = req.params.id;
    const sucatdata = req.body;
    const updated = await subcat.updatesubcategory(Category_Id, sucatdata);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const deletesubcate = async (req, res, next) => {
  try {
    const Category_Id = req.params.id;
    const deleted = await subcat.Deletesubcaetgory(Category_Id);
    res.send(deleted);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getonesubcategory = async (req, res, next) => {
  try {
    const Category_Id = req.params.id;
    const productdata = await subcat.Getonecategory(Category_Id);
    res.send(productdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
const getsubcategory = async (req, res, next) => {
  try {
    const MainCategory_Id = req.params.id;
    const productdata = await subcat.Getonesubcategory(MainCategory_Id);
    res.send(productdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};
module.exports = {
  Getallsubcategory: Getallsubcategory,
  insersubcaegory: insersubcaegory,
  updatesubcate: updatesubcate,
  deletesubcate: deletesubcate,
  getonesubcategory: getonesubcategory,
  getsubcategory: getsubcategory,
};
