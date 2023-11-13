/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dbConnect from '../../../../lib/dbConnect';
import Procedure from '../../../../models/procedure.model';

export async function PATCH(req: any) {
  const procedure = await req.json();
  await dbConnect();
  const result = await Procedure.findOneAndUpdate({ _id: procedure.id }, procedure, {
    new: true,
  });
  if (!result) {
    return Response.json({ ok: false });
  }
  return Response.json({ ok: true });
}
