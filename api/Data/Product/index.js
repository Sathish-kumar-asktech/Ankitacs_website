const utils = require("../Utill");
const config = require("../../Config");

const sql = require("mssql");

const getallproduct = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Product");
    const Getallmailcategory = await pool
      .request()
      .query(sqlQueries.Getallproduct);
    return Getallmailcategory.recordset;
  } catch (error) {
    return error.message;
  }
};


const GetallActiveProducts = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Product");
    const Getallmailcategory = await pool
      .request()
      .query(sqlQueries.GetallActiveProducts);
    return Getallmailcategory.recordset;
  } catch (error) {
    return error.message;
  }
};

const Insertproduct = async (proddata, Image) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Product");
    const insertEvent = await pool
      .request()
      .input(
        "Product_Details_Description",
        sql.VarChar(500),
        proddata.Product_Details_Description
      )
      .input("Product_Details_Code", sql.BigInt, proddata.Product_Details_Code)
      .input("Category_Id", sql.BigInt, proddata.Category_Id)
      .input("Rate", sql.VarChar(50), proddata.Rate)
      .input("UOM", sql.VarChar(50), proddata.UOM)
      .input("Created_By", sql.BigInt, proddata.Created_By)
      .input("Created_Date", sql.SmallDateTime, proddata.Created_Date)
      .input("Active", sql.Char, proddata.Active)
      .input("Image", sql.VarChar(500), Image)
      .query(sqlQueries.Createproduct);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const updateproduct = async (proddata, Image) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Product");
    const insertEvent = await pool
      .request()
      .input("Product_Details_Id", sql.BigInt(), proddata.Product_Details_Id)
      .input(
        "Product_Details_Description",
        sql.VarChar(500),
        proddata.Product_Details_Description
      )
      .input("Product_Details_Code", sql.BigInt, proddata.Product_Details_Code)
      .input("Category_Id", sql.BigInt, proddata.Category_Id)
      .input("Rate", sql.VarChar(50), proddata.Rate)
      .input("UOM", sql.VarChar(50), proddata.UOM)
      .input("Modify_By", sql.BigInt, proddata.Modify_By)
      .input("Modify_Date", sql.SmallDateTime, proddata.Modify_Date)
      .input("Active", sql.Char, proddata.Active)
      .input("Image", sql.VarChar(500), Image)
      .query(sqlQueries.updateproduct);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const Deleteproduct = async (Product_Details_Id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Product");
    const deleteEvent = await pool
      .request()
      .input("Product_Details_Id", sql.BigInt, Product_Details_Id)
      .query(sqlQueries.Deleteproduct);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const getoneproduct = async (Category_Id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Product");
    const getallsalesorderhdr = await pool
      .request()
      .input("Category_Id", sql.BigInt, Category_Id)
      .query(sqlQueries.Getoneproduct);
    return getallsalesorderhdr.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetProductByCatgory = async (MainCategory_Id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Product");
    const getallsalesorderhdr = await pool
      .request()
      .input("MainCategory_Id", sql.BigInt, MainCategory_Id)
      .query(sqlQueries.GetProductByCatgory);
    return getallsalesorderhdr.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getallproduct: getallproduct,
  GetallActiveProducts,
  Insertproduct: Insertproduct,
  updateproduct: updateproduct,
  Deleteproduct: Deleteproduct,
  getoneproduct: getoneproduct,
  GetProductByCatgory: GetProductByCatgory,
};
