import mongoose from "mongoose";

const connectDB = async () => {
    mongoose.connection.on('connected', () => console.log("Database connected"))
      await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`)
}

export default connectDB




// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {


//     await mongoose.connect(`${process.env.MONGODB_URI}/prescripto`);
//     mongoose.connection.on("connected", () =>
//       console.log("✅ Database connected to prescripto")
//     );
//   } catch (error) {
//     console.error("❌ MongoDB connection error:", error.message);
//     process.exit(1);
//   }
// };

// export default connectDB;
