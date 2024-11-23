const login = require("./controller-login");
const register = require("./controller-register");
const home = require("./controller-home");
const profile = require("./controller-profile");
const contact = require("./controller-bibit");
require('dotenv').config();


module.exports = {
  login,
  register,
  home,
  profile,
  contact,
};