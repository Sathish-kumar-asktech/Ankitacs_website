const product = require("../Data/Product");
const jwt = require("jsonwebtoken");

const getallproduct = async (req, res, next) => {
  try {
    const userdata = await product.getallproduct();
    res.send(userdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetallActiveProducts = async (req, res, next) => {
  try {
    const userdata = await product.GetallActiveProducts();
    res.send(userdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const Insertproduct = async (req, res, next) => {
  try {
    const Produt = req.body;
    const insert = await product.Insertproduct(Produt);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const updateproduct = async (req, res, next) => {
  try {
    const Product_Details_Id = req.params.id;
    const sucatdata = req.body;
    const updated = await product.updateproduct(Product_Details_Id, sucatdata);
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const deleteproduct = async (req, res, next) => {
  try {
    const Product_Details_Id = req.params.id;
    const deleted = await product.Deleteproduct(Product_Details_Id);
    res.send(deleted);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const getoneproducts = async (req, res, next) => {
  try {
    const Category_Id = req.params.id;
    const productdata = await product.getoneproduct(Category_Id);
    res.send(productdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetProductByCatgory = async (req, res, next) => {
  try {
    const MainCategory_Id = req.params.id;
    const productdata = await product.GetProductByCatgory(MainCategory_Id);
    res.send(productdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  getallproduct: getallproduct,
  GetallActiveProducts,
  Insertproduct: Insertproduct,
  updateproduct: updateproduct,
  deleteproduct: deleteproduct,
  getoneproducts: getoneproducts,
  GetProductByCatgory: GetProductByCatgory,
};
