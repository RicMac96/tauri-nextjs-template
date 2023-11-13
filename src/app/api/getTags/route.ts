/* eslint-disable @typescript-eslint/no-unused-vars */
import dbConnect from '../../../../lib/dbConnect'
import Tag from '../../../../models/tag.model'

export async function GET() {
  console.log('Get Tags')
  await dbConnect()
  const res = await Tag.find({})
  console.log(res.length)
  return Response.json(res)
}
