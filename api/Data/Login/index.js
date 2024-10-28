const utils = require("../Utill");
const config = require("../../Config");
const nodemailer = require("nodemailer");

const sql = require("mssql");

const Getallusers = async () => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Login");
    const getalluser = await pool
      .request()

      .query(sqlQueries.Getallusers);
    return getalluser.recordset;
  } catch (error) {
    return error.message;
  }
};
const userlogin = async (userdata) => {
  try {
    let pool = await sql.connect(config.sql);
    const sqlQueries = await utils.loadSqlQueries("Login");
    const LoginUser = await pool
      .request()
      .input("User_Code", sql.VarChar(30), userdata.User_Code)
      .input("Password", sql.VarChar(30), userdata.Password)
      .query(sqlQueries.login);
    return LoginUser.recordset;
  } catch (error) {
    return console.log("invalide username password");
  }
};

const EmailOnEnquiry = async (req, res, next) => {
  try {
    const { products, name, company, email, phone, location } = req.body;

    // Generate HTML for the product table
    let productRows = products
      .map(
        (product, index) => `
            <tr>
             <td>${index + 1}</td>
                <td>${product.name}</td>
                <td>${product.quantity}</td>
            </tr>
        `
      )
      .join("");

    // Email HTML content
    const emailContent = `
            <h3>Inquiry Received from ${company}</h3>
            <p>Dear Team,</p>
            <p>New Product Inquiry Received for the below products,</p>
            <table border="1" cellpadding="10" cellspacing="0">
                <thead>
                    <tr>
                     <th>S No</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    ${productRows}
                </tbody>
            </table>
             <p><strong>Total No of Products : ${products.length}</strong></p
            <br>
            <p><strong>Consumer Details :</strong></p>
            <table border="1" cellspacing="0" cellpadding="5">
  <tr>
    <td><strong>Name</strong></td>
    <td>${name}</td>
  </tr>
  <tr>
    <td><strong>Company</strong></td>
    <td>${company}</td>
  </tr>
  <tr>
    <td><strong>Email</strong></td>
    <td>${email}</td>
  </tr>
  <tr>
    <td><strong>Phone</strong></td>
    <td>${phone}</td>
  </tr>
  <tr>
    <td><strong>Location</strong></td>
    <td>${location}</td>
  </tr>
</table>

        `;

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "share.asktek@gmail.com",
        pass: "neie uccx vlaj shuj",
      },
    });

    // Send email
    const mailOptions = {
      from: "share.asktek@gmail.com",
      to: "sathish.asktech@gmail.com",
      subject: "Product Inquiry",
      html: emailContent,
    };

    const info = await transporter.sendMail(mailOptions);
    res.json({ message: "Email sent successfully", info });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = {
  Getallusers: Getallusers,
  userlogin: userlogin,
  EmailOnEnquiry,
};
