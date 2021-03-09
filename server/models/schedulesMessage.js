import mongoose from 'mongoose';

const schedulesSchema = mongoose.Schema({
  name: String,
  startDate: Date,
  endDate: Date,
  isRepeating: Boolean
});

const SchedulesMessage = mongoose.model('SchedulesMessage', schedulesSchema);

export default SchedulesMessage;