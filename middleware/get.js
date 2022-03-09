const User = require("../models/Users");
const Admin = require("../models/Admins");
const Product = require("../models/Products");

async function getUser(req, res, next) {
  let user;
  try {
    user = await User.findById(req.params.id);

    if (user == null) {
      return res.status(404).json({ message: "Cannot find user" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.user = user;
  next();
}

async function getAdmin(req, res, next) {
  let admin;
  try {
    admin = await Admin.findById(req.params.id);

    if (admin == null) {
      return res.status(404).json({ message: "Cannot find admin" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.admin = admin;
  next();
}

async function getProduct(req, res, next) {
  let product;
  try {
    product = await Product.findById(req.params.id);

    if (product == null) {
      return res.status(404).json({ message: "Cannot find product" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }

  res.product = product;
  next();
}

module.exports = { getUser, getProduct, getAdmin };
