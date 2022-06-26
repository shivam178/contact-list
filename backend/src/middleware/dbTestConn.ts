// import sequelize from "../db";

// const dbSync = async () => {
//   const sql = await sequelize();
//   try {
//     await sql.sync({
//       alter: {
//         drop: false, // if set to true renaming column will delete all the data from that column
//       }
//     });
//   } catch (error) {
//     console.log("Error while testing sql connection on startup", error);
//     throw error;
//   }
// }

// export default dbSync;