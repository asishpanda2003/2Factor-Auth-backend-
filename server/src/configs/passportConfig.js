import passport from "passport";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcryptjs";
import User from "../models/user.js"; // Make sure this path is correct and includes the ".js" extension

// Local Strategy for username and password authentication
passport.use(
  new LocalStrategy(
    {
      usernameField: "username", // explicitly define the username field (if needed)
      passwordField: "password", // explicitly define the password field (if needed)
    },
    async (username, password, done) => {
      try {
        const user = await User.findOne({ username });

        if (!user) {
          return done(null, false, { message: "User not found" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: "Incorrect password" });
        }
      } catch (error) {
        return done(error);
      }
    }
  )
);

// Serialize user to store user ID in session
passport.serializeUser((user, done) => {
  done(null, user._id);
});

// Deserialize user by finding the user with the stored ID
passport.deserializeUser(async (_id, done) => {
  try {
    const user = await User.findById(_id);
    if (!user) {
      return done(null, false, { message: "User not found" });
    }
    done(null, user);
  } catch (error) {
    done(error);
  }
});

export default passport;
