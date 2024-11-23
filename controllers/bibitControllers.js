import bibit from "../models/bibitModels.js";

export const getBibit = async(req, res) => {
    try {
        const response = await bibit.findAll();
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};