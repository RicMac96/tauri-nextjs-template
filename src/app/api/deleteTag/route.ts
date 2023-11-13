/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dbConnect from '../../../../lib/dbConnect';
import Tag from '../../../../models/tag.model';

export async function DELETE(req: any) {
  const id = await req.json();
  await dbConnect();
  const res = await Tag.findByIdAndDelete(id);
  return Response.json(res);
}
