const Transaction = require("../models/Transaction");

const createTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.create(req.body);

        res.status(201).json({
            success: true,
            message: "Transaction created successfully",
            transaction
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

const getTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find()
            .sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: transactions.length,
            transactions
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createTransaction,
    getTransactions
};