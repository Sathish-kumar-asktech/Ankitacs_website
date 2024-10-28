const express = require("express");
const usercontrollers = require("../Controller/Logincontroller");
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

const nodemailer = require("nodemailer");

const router = express.Router();

// Function to handle email inquiry
const EmailOnEnquiry = async (req, res) => {
  try {
    const { products, name, company, email, phone, location } = req.body;
    console.log(req.body);

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

    const emailContent = `
            <h3>Enquiry Received from ${company}</h3>
            <p>Dear Team,</p>
            <p>New Product Inquiry Received for the below products:</p>
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
            <p><strong>Total No of Products: ${products.length}</strong></p>
            <br>
            <p><strong>Consumer Details:</strong></p>
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
            <p><strong>Have a Great Day!</strong></p>
        `;

    const responseContent = `
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to us via our website. We appreciate your interest in our housekeeping and stationery products, and we’re excited to help you find the perfect solutions for your needs.</p>
      
      <p>At Ankita Computer & Stationers, we are committed to providing high-quality, reliable products designed to keep your spaces clean, organized, and efficient. Our offerings include a comprehensive range of cleaning supplies, tools, and stationery essentials suitable for homes, offices, schools, and more.</p>

      <p>Here are the products you inquired about:</p>
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
      
      <p>One of our team members will be reaching out to you shortly to discuss your requirements in more detail and provide personalized recommendations based on your needs. In the meantime, please feel free to reply to this email with any specific questions or additional details about the products you’re interested in.</p>
      
      <p>Thank you again for considering Ankita Computer & Stationers for your housekeeping and stationery needs. We look forward to connecting with you soon!</p>
    `;

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "share.asktek@gmail.com", // Your email
        pass: "neie uccx vlaj shuj", // Your app-specific password
      },
    });

    // Send inquiry email to the team
    const mailOptionsTeam = {
      from: "share.asktek@gmail.com",
      to: "sathish.asktech@gmail.com",
      subject: "New Product Inquiry Received",
      html: emailContent,
    };

    // Send acknowledgment email to the customer
    const mailOptionsCustomer = {
      from: "share.asktek@gmail.com",
      to: email,
      subject: "Thank You for Your Inquiry",
      html: responseContent,
    };

    // Send both emails
    await transporter.sendMail(mailOptionsTeam);
    await transporter.sendMail(mailOptionsCustomer);

    // Respond with success
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    // Respond with error
    res.status(400).json({ error: error.message });
  }
};

// Function to handle email inquiry
const EmailOnEnquiryForm = async (req, res) => {
  try {
    const { name, phone, email, address, message } = req.body;

    const emailContent = `
      <h3>New Inquiry Received</h3>
      <p>Dear Team,</p>
      <p>A new inquiry has been submitted with the following details:</p>
      
      <table border="1" cellspacing="0" cellpadding="5">
        <tr>
          <td><strong>Name</strong></td>
          <td>${name}</td>
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
          <td><strong>Address</strong></td>
          <td>${address}</td>
        </tr>
      </table>

      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <p><strong>Have a Great Day!</strong></p>
    `;

    const responseContent = `
      <p>Dear ${name},</p>
      <p>Thank you for reaching out to us via our website. We appreciate your interest in our housekeeping and stationery products, and we’re excited to help you find the perfect solutions for your needs.</p>
      
      <p>At Ankita Computer & Stationers, we are committed to providing high-quality, reliable products designed to keep your spaces clean, organized, and efficient. Our offerings include a comprehensive range of cleaning supplies, tools, and stationery essentials suitable for homes, offices, schools, and more.</p>
      
      <p>One of our team members will be reaching out to you shortly to discuss your requirements in more detail and provide personalized recommendations based on your needs. In the meantime, please feel free to reply to this email with any specific questions or additional details about the products you’re interested in.</p>
      
      <p>Thank you again for considering Ankita Computer & Stationers for your housekeeping and stationery needs. We look forward to connecting with you soon!</p>
    `;

    // Setup Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "share.asktek@gmail.com", // Your email
        pass: "neie uccx vlaj shuj", // Your app-specific password
      },
    });

    // Send inquiry email to the team
    const mailOptionsTeam = {
      from: "share.asktek@gmail.com",
      to: "sathish.asktech@gmail.com",
      subject: "New Inquiry Received",
      html: emailContent,
    };

    // Send acknowledgment email to the customer
    const mailOptionsCustomer = {
      from: "share.asktek@gmail.com",
      to: email,
      subject: "Thank You for Your Inquiry",
      html: responseContent,
    };

    await transporter.sendMail(mailOptionsTeam);
    await transporter.sendMail(mailOptionsCustomer);

    // Respond with success
    res.status(200).json({ message: "Emails sent successfully" });
  } catch (error) {
    // Respond with error
    res.status(400).json({ error: error.message });
  }
};

router.get("/Getallusers", verifytoken, usercontrollers.Getallusers);
router.post("/EmailOnEnquiry", verifytoken, EmailOnEnquiry);
router.post("/EmailOnEnquiryForm", verifytoken, EmailOnEnquiryForm);
router.post("/Login", verifytoken, usercontrollers.userlogin);

module.exports = {
  Route: router,
};
