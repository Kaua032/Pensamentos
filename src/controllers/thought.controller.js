import Thought from "../models/Thought.js";

export const CreateThoughtController = async (req, res) => {
  const { title, description } = req.body;
  try {
    const thought = Thought.create({ title, description });

    res.status(201).send(thought);
  } catch (error) {
    res.send({ message: error.message });
  }
};
