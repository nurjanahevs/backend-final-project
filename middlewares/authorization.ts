const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userAuth = (req, res, next) => {
  let token = req.headers["access-token"] || req.headers["authorization"];
  if (token.startsWith("Bearer")) {
    token = token.slice(7, token.length);
  }
  if (token) {
    jwt.verify(token, "sukamaju", (err, decoded) => {
      if (err) next({ name: "INVALID_TOKEN" });
      else {
        req._userId = decoded._id;
        next();
      }
    });
  } else next({ name: "MISSING_TOKEN" });
};

module.exports = userAuth;
