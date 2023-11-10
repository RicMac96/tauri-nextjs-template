/* eslint-disable @typescript-eslint/no-unnecessary-condition */
import mongoose from "mongoose"

const windfarmSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    Country: {
      type: String,
      required: true,
    },
    SAP: {
      type: String,
      required: true,
    },
    PI: {
      type: String,
      required: true,
    },
    Manager: {
      type: String,
    },
  },
  {
    timestamps: true,
    collection: "RGU",
  },
)

const Windfarm = mongoose.models.Windfarm || mongoose.model("Windfarm", windfarmSchema)

export default Windfarm
