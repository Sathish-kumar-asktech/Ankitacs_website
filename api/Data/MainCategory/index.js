const utils = require("../Utill");
const config = require("../../Config");

const sql = require("mssql");

const Getallmailcategory = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("MainCategory");
    const Getallmailcategory = await pool
      .request()
      .query(sqlQueries.Getallmailcategory);
    return Getallmailcategory.recordset;
  } catch (error) {
    return error.message;
  }
};


const GetallActiveMainCategory = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("MainCategory");
    const GetallActiveMainCategory = await pool
      .request()
      .query(sqlQueries.GetallActiveMainCategory);
    return GetallActiveMainCategory.recordset;
  } catch (error) {
    return error.message;
  }
};

const GetoneMainCategory = async (MainCategory_Id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("MainCategory");
    const getallsalesorderhdr = await pool
      .request()
      .input("MainCategory_Id", sql.BigInt, MainCategory_Id)
      .query(sqlQueries.Getonemaincategory);
    return getallsalesorderhdr.recordset;
  } catch (error) {
    return error.message;
  }
};

const InsertCategory = async (categorydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("MainCategory");
    const insertEvent = await pool
      .request()
      .input(
        "MainCategory_Description",
        sql.VarChar(50),
        categorydata.MainCategory_Description
      )
      .input("Created_By", sql.BigInt, categorydata.Created_By)
      .input("Created_Date", sql.SmallDateTime(), categorydata.Created_Date)
      .input("Active", sql.Char(1), categorydata.Active)
      .query(sqlQueries.InsertCategory);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const UpdateCategory = async (MainCategory_Id, dataReceived) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("MainCategory");
    const insertEvent = await pool
      .request()
      .input("MainCategory_Id", sql.BigInt(), MainCategory_Id)
      .input(
        "MainCategory_Description",
        sql.VarChar(50),
        dataReceived.MainCategory_Description
      )
      .input("Modify_By", sql.BigInt, dataReceived.Modify_By)
      .input("Modify_Date", sql.SmallDateTime(), dataReceived.Modify_Date)
      .input("Active", sql.Char(1), dataReceived.Active)
      .query(sqlQueries.UpdateCategory);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const DeleteCategory = async (MainCategory_Id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("MainCategory");
    const deleteEvent = await pool
      .request()
      .input("MainCategory_Id", sql.BigInt, MainCategory_Id)
      .query(sqlQueries.DeleteCategory);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  Getallmailcategory: Getallmailcategory,
  GetoneMainCategory: GetoneMainCategory,
  InsertCategory,
  UpdateCategory,
  DeleteCategory,
  GetallActiveMainCategory
};
