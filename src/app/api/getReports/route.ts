import { NextResponse } from "next/server"

import dbConnect from "../../../../lib/dbConnect"
import Report from "../../../../models/report.model"

export async function GET() {
  await dbConnect()
  const res = await Report.find({}).populate("windfarm")
  return NextResponse.json(res)
}
