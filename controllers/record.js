import Record from "../models/Record.js";

export const createRecord = async (req, res) => {
    const data = req.body;
    const newRecord = new Record(data);
    try {
        await newRecord.save();

        res.status(201).json(newRecord);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};