const nodemailer = require("nodemailer");
require("dotenv").config();

const { META_PASSWORD, META_EMAIL } = process.env;

const nodemailerConfig = {
  service: "gmail",
  auth: {
    user: META_EMAIL,
    pass: META_PASSWORD,
  },
};
const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: META_EMAIL };
  await transport.sendMail(email);
};

module.exports = { sendEmail };
