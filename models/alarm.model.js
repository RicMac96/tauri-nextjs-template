import mongoose from 'mongoose';

const alarmSchema = new mongoose.Schema(
  {
    windfarm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Windfarm",
      required: true
    },
    country: {
      type: String,
      required: true
    },
    list: [{
      alarm: {
        type: String,
        required: true
      },
      alarm_2: {
        type: String,
      },
      alarmCode: { 
        type: String 
      },
      description: {
        type: String,
      },
      reset: {
        type: String,
      },
      remoteOperation: {
        type: String
      }
    }],
  },
  {
    timestamps: true
  }
);

const Alarm = mongoose.models.Alarm || mongoose.model('Alarm', alarmSchema);

export default Alarm;
