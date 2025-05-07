// // auth/auth.service.js
// import { Sequelize } from "sequelize"; // Import the Sequelize constructor
// import User from "../user/user.model.js"; // Assuming user.model.js uses export default
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import dotenv from "dotenv"; // Import dotenv to load environment variables

// dotenv.config(); // Load environment variables from .env file

// const authService = {
//   async registerUser({ username, email, password }) {
//     try {
//       // Check if user with the same username or email already exists
//       const existingUser = await User.findOne({
//         where: {
//           [Sequelize.Op.or]: [{ username }, { email }],
//         },
//       });
//       if (existingUser) {
//         throw new Error("Username or email already exists");
//       }
//       const hashedPassword = await bcrypt.hash(password, 10);
//       const newUser = await User.create({
//         username,
//         email,
//         password: hashedPassword,
//       });
//       return newUser; // Sequelize's create method returns the created instance
//     } catch (error) {
//       console.error("Error in authService.registerUser:", error);
//       throw error;
//     }
//   },

//   async loginUser(email, password) {
//     console.log("LOGGIN IN NOW", email, password);
//     try {
//       const user = await User.findOne({ where: { email } });

//       console.log("USER WAS GOOD", user);

//       if (!user) {
//         return null; // Invalid credentials (user not found)
//       }

//       const passwordMatch = await bcrypt.compare(password, user.password);

//       if (!passwordMatch) {
//         return null; // Invalid credentials (password mismatch)
//       }

//       // Generate a JWT token
//       const token = jwt.sign({ id: user.id }, process.env.ACCESS_TOKEN_SECRET, {
//         expiresIn: "1h", // Example expiration
//       });
//       const refreshToken = jwt.sign(
//         { id: user.id },
//         process.env.REFRESH_TOKEN_SECRET
//       );

//       return { user, token, refreshToken };
//     } catch (error) {
//       console.error("Error in authService.loginUser:", error);
//       throw error;
//     }
//   },

//   // Potentially other auth-related service methods (e.g., password reset logic)
// };

// export default authService;
