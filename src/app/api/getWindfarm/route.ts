/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Windfarm from 'models/windfarm.model';

import dbConnect from '../../../../lib/dbConnect';

export async function POST(req: any) {
  try {
    await dbConnect();

    const id = await req.json();

    const data = await Windfarm.find(id ? { _id: id } : {}).sort({ Name: 1 });

    return Response.json(data);
  } catch (error) {
    // Handle errors appropriately, e.g., log the error or send an error response
    console.error(error);
    return Response.json({ error: 'An error occurred' }, { status: 500 });
  }
}
