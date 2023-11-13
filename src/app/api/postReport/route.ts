/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dbConnect from '../../../../lib/dbConnect'
import Report from '../../../../models/report.model'

export async function POST(req: any) {
  const report = await req.json()
  await dbConnect()
  const result = await Report.create(report)
  if (!result) {
    return Response.json({ ok: false })
  }
  return Response.json({ ok: true })
}
