
import mongoose from 'mongoose';

import SchedulesMessage from '../models/schedulesMessage.js';

export const getSchedules = async (req, res) => {
  try {
    const schedulesMessage = await SchedulesMessage.find();

    res.status(200).json(schedulesMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createSchedule = async (req, res) => {
  const schedule = req.body;
  const newSchedule = new SchedulesMessage(schedule)
  
  try {
    await newSchedule.save();

    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const deleteSchedule = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`{Schedule not found}`);
  }

  await SchedulesMessage.findByIdAndRemove(id);

  res.json({ message: "Schedule deleted successfully!"});
}

export const updateSchedule = async (req, res) => {
  const { id } = req.params;
  const schedule = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`{Schedule not found}`);
  }
  
  const newSchedule = { ...schedule, _id: id };

  await SchedulesMessage.findByIdAndUpdate(id, newSchedule, { new: true });

  res.json(newSchedule);
}