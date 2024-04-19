import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();
// const db = new Sequelize("secret", "root", "", {
//   host: "localhost",
//   dialect: "mysql",
// });

// const db = new Sequelize(
//   process.env.DATABASE,
//   process.env.USERNAME,
//   process.env.PASSWORD,
//   {
//     host: process.env.HOST,
//     dialect: "mysql",
//     dialectOptions: {
//       ssl: {
//         rejectUnauthorized: true,
//       },
//     },
//   }
// );

const db = new Sequelize(
  process.env.DATABASE,
  process.env.USERNAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST,
    port: 3307,
    dialect: "mysql",
    // dialectOptions: {
    //   ssl: {
    //     rejectUnauthorized: true,
    //   },
    // },
  }
);

export default db;
