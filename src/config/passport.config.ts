// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import User from "../models/user.model";
// import { logger } from "../utils/logger";

// const GOOGLE_CLIENT_ID =
//   process.env.GOOGLE_CLIENT_ID ||
//   "1042771701848-gi25mu5qgbag5kknl9dmpoofap16r35l.apps.googleusercontent.com";
// const GOOGLE_CLIENT_SECRET =
//   process.env.GOOGLE_CLIENT_SECRET || "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";
// const CALLBACK_URL =
//   process.env.GOOGLE_CALLBACK_URL ||
//   "http://localhost:3000/api/auth/google/callback";

// passport.serializeUser((user: any, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id: string, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (error) {
//     done(error, null);
//   }
// });
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: GOOGLE_CLIENT_ID,
//       clientSecret: GOOGLE_CLIENT_SECRET,
//       callbackURL: CALLBACK_URL,
//       scope: ["profile", "email"]
//     },
//     async (accessToken, refreshToken, profile, done) => {
//       try {
//         logger.info("Google authentication callback received");
//         logger.info(`Profile email: ${profile.emails?.[0]?.value}`);
//         logger.info(`Profile data: ${JSON.stringify(profile, null, 2)}`);

//         // Récupérer le nom de famille, avec une valeur par défaut
//         const lastName =
//           profile.name?.familyName ||
//           profile.displayName.split(" ").slice(1).join(" ") ||
//           "Utilisateur Google"; // Valeur par défaut

//         // Vérifier si l'utilisateur existe déjà
//         let user = await User.findOne({ email: profile.emails?.[0]?.value });

//         if (user) {
//           logger.info(`Utilisateur existant trouvé: ${user.email}`);
//           // Mettre à jour lastLogin
//           user.lastLogin = new Date();
//           await user.save();
//           return done(null, user);
//         }

//         // Créer un nouvel utilisateur avec une valeur par défaut pour lastName
//         const newUser = new User({
//           firstName:
//             profile.name?.givenName ||
//             profile.displayName.split(" ")[0] ||
//             "Utilisateur",
//           lastName: lastName,
//           email: profile.emails?.[0]?.value,
//           password: `google_${profile.id}`,
//           role: "user",
//           active: true,
//           lastLogin: new Date()
//         });

//         await newUser.save();
//         logger.info(
//           `Nouvel utilisateur créé via Google OAuth: ${newUser.email}`
//         );

//         return done(null, newUser);
//       } catch (error) {
//         logger.error("Erreur lors de l'authentification Google", error);
//         return done(error as Error, undefined);
//       }
//     }
//   )
// );
// export default passport;
