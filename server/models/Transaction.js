const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
    {
        transactionId: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        customer: {
            name: {
                type: String,
                required: true,
                trim: true
            },

            email: {
                type: String,
                required: true,
                trim: true,
                lowercase: true
            }
        },

        amount: {
            type: Number,
            required: true,
            min: 1
        },

        currency: {
            type: String,
            default: "INR"
        },

        paymentMethod: {
            type: String,
            enum: [
                "upi",
                "card",
                "netbanking",
                "wallet",
                "unknown"
            ],
            default: "unknown"
        },

        status: {
            type: String,
            enum: [
                "created",
                "pending",
                "success",
                "failed",
                "abandoned"
            ],
            required: true
        },

        failureReason: {
            type: String,
            default: null
        },

        attemptCount: {
            type: Number,
            default: 1,
            min: 1
        },

        source: {
            type: String,
            enum: ["simulator", "razorpay"],
            default: "simulator"
        }
    },
    {
        timestamps: true
    }
);

const Transaction = mongoose.model(
    "Transaction",
    transactionSchema
);

module.exports = Transaction;