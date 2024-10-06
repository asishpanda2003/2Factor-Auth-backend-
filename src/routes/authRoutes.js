import { Router } from "express";
import passport from "passport";
import {
  register,
  login,
  authStatus,
  logout,
  setup2FA,
  verify2FA,
  reset2FA,
} from "../controllers/authController.js"; // Corrected the import path to "authController.js"

const router = Router();

// Registration, Login, Auth Status, Logout
router.post("/register", register);
router.post("/login", passport.authenticate("local"), login);
router.get("/status", authStatus);
router.post("/logout", logout);

// Two Factor Authentication setup routes
router.post("/2fa/setup", (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "Unauthorized" });
}, setup2FA);

router.post("/2fa/verify", (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "Unauthorized" });
}, verify2FA);

router.post("/2fa/reset", (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.status(401).json({ message: "Unauthorized" });
}, reset2FA);

export default router;
