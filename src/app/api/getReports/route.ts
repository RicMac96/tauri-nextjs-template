/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from "../../../../lib/dbConnect"
import Report from "../../../../models/report.model"

export async function GET() {
  console.log("Get Reports")
  await dbConnect()
  const res = await Report.find({}).populate("windfarm")
  console.log(res.length)
  return Response.json(res)
}
