const express = require("express");
const {
  register,
  login,
  logout,
  getAllUsers,
} = require("../controllers/authController");
const router = express.Router();

// Register route
router.post("/register", register);

// Login route
router.post("/login", login);

// Logout route
router.post("/logout", logout);

router.get("/users", getAllUsers);

module.exports = router;
