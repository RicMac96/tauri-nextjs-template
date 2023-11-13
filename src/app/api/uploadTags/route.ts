/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { NextResponse } from 'next/server'

import dbConnect from '../../../../lib/dbConnect'
import Tag from '../../../../models/tag.model'

export async function POST(req: any) {
  const { list } = await req.json()
  await dbConnect()
  const res = await Tag.create(list)
  return NextResponse.json(res)
}
