const maincate = require("../Data/MainCategory");
const jwt = require("jsonwebtoken");

const GetallMainCategorys = async (req, res, next) => {
  try {
    const userdata = await maincate.Getallmailcategory();
    res.send(userdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};


const GetallActiveMainCategory = async (req, res, next) => {
  try {
    const userdata = await maincate.GetallActiveMainCategory();
    res.send(userdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const GetoneMainCategory = async (req, res, next) => {
  try {
    const MainCategory_Id = req.params.id;
    const productdata = await maincate.GetoneMainCategory(MainCategory_Id);
    res.send(productdata);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const InsertCategory = async (req, res, next) => {
  try {
    const dataReceived = req.body;
    const insert = await maincate.InsertCategory(dataReceived);
    res.send(insert);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const UpdateCategory = async (req, res, next) => {
  try {
    const MainCategory_Id = req.params.id;
    const dataReceived = req.body;
    const updated = await maincate.UpdateCategory(
      MainCategory_Id,
      dataReceived
    );
    res.send(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

const DeleteCategory = async (req, res, next) => {
  try {
    const MainCategory_Id = req.params.id;
    const deleted = await maincate.DeleteCategory(MainCategory_Id);
    res.send(deleted);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  GetallActiveMainCategory,
  GetallMainCategorys: GetallMainCategorys,
  GetoneMainCategory: GetoneMainCategory,
  InsertCategory,
  UpdateCategory,
  DeleteCategory,
};
