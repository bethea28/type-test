// import { Sequelize } from "sequelize";
// import dotenv from "dotenv";

// dotenv.config();

// const sequelize = new Sequelize(
//   process.env.DB_NAME || "2cents", // db name
//   process.env.DB_USER || "bethea28", // username
//   process.env.DB_PASSWORD || "", // password
//   {
//     host: process.env.DB_HOST || "localhost",
//     port: process.env.DB_PORT || 5432,
//     dialect: "postgres",
//     logging: false,
//     pool: {},
//   }
// );

// // (Optional) Test the connection
// async function testConnection() {
//   try {
//     await sequelize.authenticate();
//     console.log("Database connection successful.");
//   } catch (error) {
//     console.error("Database connection failed:", error);
//   }
// }

// testConnection();

// export default sequelize;
