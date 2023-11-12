/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import mongoose from "mongoose"
import Windfarm from "./windfarm.model"
import Tag from "./tag.model"

const procedureSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  windfarm: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Windfarm",
    },
  ],
  severity: {
    type: String,
    required: true,
    enum: ["Low", "Medium", "High"],
    default: "Low",
  },
  subject: {
    type: String,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
  tag: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tag",
    },
  ],
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
})

const Procedure =
  mongoose.models.Procedure || mongoose.model("Procedure", procedureSchema)

export default Procedure
