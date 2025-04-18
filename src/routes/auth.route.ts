import { Router } from "express";
import * as authController from "../controllers/auth.controller";
// import passport from "../config/passport.config";
import jwt from "jsonwebtoken";
import { logger } from "../utils/logger";

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";

router.post("/login-register", authController.loginOrRegister);

// router.get(
//   "/google",
//   passport.authenticate("google", { scope: ["profile", "email"] })
// );

// router.get(
//   "/google/callback",
//   (req, res, next) => {
//     logger.info("Google callback route accessed");
//     passport.authenticate("google", {
//       failureRedirect: "/login",
//       session: false
//     })(req, res, next);
//   },
//   (req, res) => {
//     try {
//       if (!req.user) {
//         logger.error("User object is undefined after authentication");
//         return res.status(500).json({
//           success: false,
//           message: "User data not available"
//         });
//       }

//       const user = req.user as any;
//       logger.info("User authenticated:", user.email);

//       const token = jwt.sign(
//         {
//           userId: user._id,
//           email: user.email,
//           role: user.role
//         },
//         JWT_SECRET,
//         { expiresIn: "1h" }
//       );

//       return res.json({
//         success: true,
//         token,
//         user: {
//           id: user._id,
//           email: user.email,
//           name: `${user.firstName} ${user.lastName}`,
//           role: user.role
//         }
//       });
//     } catch (error) {
//       logger.error("Erreur lors de la génération du token JWT", error);
//       return res.status(500).json({
//         success: false,
//         message: "Authentication failed"
//       });
//     }
//   }
// );

export default router;
