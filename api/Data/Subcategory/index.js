const utils = require("../Utill");
const config = require("../../Config");

const sql = require("mssql");

const Getallsubcat = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Subcategory");
    const Getallmailcategory = await pool
      .request()

      .query(sqlQueries.Getallsubcategory);
    return Getallmailcategory.recordset;
  } catch (error) {
    return error.message;
  }
};


const Insertsubcategory = async (categorydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Subcategory");
    const insertEvent = await pool
      .request()

      .input("Category_Code", sql.BigInt(), categorydata.Category_Code)
      .input(
        "Category_Description",
        sql.VarChar(50),
        categorydata.Category_Description
      )
      .input("Created_By", sql.BigInt, categorydata.Created_By)
      .input("Created_Date", sql.SmallDateTime(), categorydata.Created_Date)
      .input("Active", sql.Char(1), categorydata.Active)
      .input("MainCategory_Id", sql.BigInt(), categorydata.MainCategory_Id)

      .query(sqlQueries.Createsubcateogry);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};

const updatesubcategory = async (Category_Id, categorydata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Subcategory");
    const insertEvent = await pool
      .request()

      .input("Category_Id", sql.BigInt(), Category_Id)
      .input("Category_Code", sql.BigInt(), categorydata.Category_Code)
      .input(
        "Category_Description",
        sql.VarChar(50),
        categorydata.Category_Description
      )
      .input("Modify_By", sql.BigInt, categorydata.Modify_By)
      .input("Modify_Date", sql.SmallDateTime(), categorydata.Modify_Date)
      .input("Active", sql.Char(1), categorydata.Active)
      .input("MainCategory_Id", sql.BigInt(), categorydata.MainCategory_Id)

      .query(sqlQueries.Updatesubcatgory);
    return insertEvent.recordset;
  } catch (error) {
    return error.message;
  }
};
const Deletesubcaetgory = async (Category_Id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Subcategory");
    const deleteEvent = await pool
      .request()
      .input("Category_Id", sql.BigInt, Category_Id)
      .query(sqlQueries.Deletesubcategory);
    return deleteEvent.recordset;
  } catch (error) {
    return error.message;
  }
};
const Getonecategory = async (Category_Id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Subcategory");
    const getallsalesorderhdr = await pool
      .request()
      .input("Category_Id", sql.BigInt, Category_Id)
      .query(sqlQueries.Getonesubcategory);
    return getallsalesorderhdr.recordset;
  } catch (error) {
    return error.message;
  }
};

const Getonesubcategory = async (MainCategory_Id) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Subcategory");
    const getallsalesorderhdr = await pool
      .request()

      .input("MainCategory_Id", sql.BigInt, MainCategory_Id)
      .query(sqlQueries.getsubcategory);
    return getallsalesorderhdr.recordset;
  } catch (error) {
    return error.message;
  }
};
module.exports = {
  Getallsubcat: Getallsubcat,
  Insertsubcategory: Insertsubcategory,
  updatesubcategory: updatesubcategory,
  Deletesubcaetgory: Deletesubcaetgory,
  Getonecategory: Getonecategory,
  Getonesubcategory: Getonesubcategory,
};
