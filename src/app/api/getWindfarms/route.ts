import dbConnect from '../../../../lib/dbConnect'
import Windfarm from '../../../../models/windfarm.model'

export async function GET() {
  await dbConnect()
  const res = await Windfarm.find({})
  return Response.json(res)
}
