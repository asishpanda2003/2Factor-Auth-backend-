import express from "express";
import session from "express-session"; // Corrected from "session" to "express-session"
import passport from "passport"; // Corrected from "pass" to "passport"
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./configs/dbConnect.js";
import authRoutes from "./routes/authRoutes.js";
import "./configs/passportConfig.js";

dotenv.config();
dbConnect();

const app = express();

//middleware
const corsOptions = {
  origin: ["http://localhost:3001"],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json({ limit: "100mb" })); 
app.use(express.urlencoded({ limit: "100mb", extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 60000 * 60 * 12, // 12 hours
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

//routes
app.use("/api/auth", authRoutes);

//listen
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
