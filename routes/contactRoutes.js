const express = require("express");
const nodemailer = require("nodemailer");
const app = express.Router();
require("dotenv").config();

app.get("/", (req, res) => res.send({ msg: "Send contact using POST" }));

app.post("/", (req, res) => {
  const { name, email, message } = req.body;

  console.log(process.env.EMAIL, process.env.PASS);
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
  });

  const mailOptions = {
    from: `${email}`,
    to: `${process.env.EMAIL}`,
    subject: "This is from portfolio",
    text: `${name} has messaged you, saying:
    
    ${message}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(400).send({ msg: "Email could not be sent " + error });
    } else {
      console.log("Email sent: " + info.response);
      res.send({ msg: "Message sent successfully" });
    }
  });
});

module.exports = app;
