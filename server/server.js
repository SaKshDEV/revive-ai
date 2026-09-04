const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const transactionRoutes = require("./routes/transactionRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/transactions", transactionRoutes);

app.get("/api/health", (req, res) => {
    res.status(200).json({
        success: true,
        message: "ReviveAI API is running"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`ReviveAI server running on port ${PORT}`);
});