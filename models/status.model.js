import mongoose from "mongoose";

const statusSchema = new mongoose.Schema(
  {
    status: { type: String },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields
  }
);

const Status = mongoose.models.Status || mongoose.model("Status", statusSchema);

export default Status;
