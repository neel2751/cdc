// import mongoose from "mongoose";

// export async function connect() {
//   try {
//     mongoose.connect(process.env.MONGO_DB_URL);
//     // console.log(process.env.MONGO_DB_URL);
//     const connection = mongoose.connection;
//     connection.on("Connected", () => {
//       console.log("MongoDB connected successfully");

//       connection.on("error", (err) => [
//         console.log(`MongoDB error: ${err}`),
//         process.exit(),
//       ]);
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

import mongoose from "mongoose";

let isConnected = false;

export async function connect() {
  try {
    if (!isConnected) {
      await mongoose.connect(process.env.MONGO_DB_URL);
      isConnected = true;

      const connection = mongoose.connection;
      connection.on("connected", () => {
        console.log("MongoDB connected successfully");
      });

      connection.on("error", (err) => {
        console.error(`MongoDB error: ${err}`);
        process.exit(1); // Exit the process if MongoDB connection fails
      });
    }
  } catch (error) {
    console.error(error);
    process.exit(1); // Exit the process if an error occurs during connection
  }
}
