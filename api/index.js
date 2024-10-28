const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const config = require("./Config");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/Public", express.static("Public"));
app.use("/api/productimage", express.static("Public"));
const login = require("./Route/Loginroute");
const maincate = require("./Route/MainCategoryroute");
const sucat = require("./Route/SubcategoryRoute");
const product = require("./Route/ProductRoute");

app.use("/api", login.Route);
app.use("/api", maincate.Route);
app.use("/api", sucat.Route);
app.use("/api", product.Route);

app.listen(config.port, () => {
  console.log("app listening on url http://localhost:" + config.port);
});
