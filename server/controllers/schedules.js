import SchedulesMessage from '../models/schedulesMessage.js';

export const getSchedules = async (req, res) => {
  try {
    const schedulesMessage = await SchedulesMessage.find();
    res.status(200).json(schedulesMessage);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createSchedules = async (req, res) => {
  const schedule = req.body;
  const newSchedule = new SchedulesMessage(schedule)
  
  try {
    await newSchedule.save();
    res.status(201).json(newSchedule);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}