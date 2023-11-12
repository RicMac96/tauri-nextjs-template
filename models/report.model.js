/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import mongoose from "mongoose"
import Windfarm from "./windfarm.model"
import Tag from "./tag.model"

const reportSchema = new mongoose.Schema(
  {
    windfarm: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Windfarm",
    },
    severity: {
      type: String,
      required: true,
      enum: ["Low", "Medium", "High"],
      default: "Low",
    },
    text: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
    },
    date: {
      type: String,
    },
    status: {
      type: String,
      enum: ["Pending", "Ongoing", "Finished"],
    },
    tag: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Tag",
      },
    ],
    owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true, // This adds createdAt and updatedAt fields
    collection: "reports",
  },
)

const Report = mongoose.models.Report || mongoose.model("Report", reportSchema)

export default Report
