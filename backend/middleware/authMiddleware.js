// const jwt = require("jsonwebtoken");
// require("dotenv").config();

// module.exports = function (req, res, next) {
//   const token = req.header("Authorization");
//   if (!token) return res.status(401).json({ message: "Access Denied" });

//   try {
//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = verified;
//     next();
//   } catch (error) {
//     res.status(400).json({ message: "Invalid Token" });
//   }
// };




const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = function (req, res, next) {
  // Check if Authorization header exists and if it starts with 'Bearer'
  const token = req.header("Authorization")?.split(" ")[1]; // Split to get token after 'Bearer'

  if (!token) return res.status(401).json({ message: "Access Denied" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified; // Add verified token data to the request object
    next(); // Call the next middleware function
  } catch (error) {
    res.status(400).json({ message: "Invalid Token" });
  }
};
