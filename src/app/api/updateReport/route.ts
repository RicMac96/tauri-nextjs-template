/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dbConnect from "../../../../lib/dbConnect"
import Report from "../../../../models/report.model"

export async function PATCH(req: any) {
  const report = await req.json()
  await dbConnect()
  const result = await Report.findOneAndUpdate({ _id: report.id }, report, {
    new: true,
  })
  if (!result) {
    return Response.json({ ok: false })
  }
  return Response.json({ ok: true })
}
