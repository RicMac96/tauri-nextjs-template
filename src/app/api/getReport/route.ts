/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dbConnect from '../../../../lib/dbConnect';
import Report from '../../../../models/report.model';

export async function POST(req: any) {
  try {
    await dbConnect();
    const id = await req.json();
    const data = await Report.findById(id).populate(['windfarm']); //['windfarm','tags']
    return Response.json(data);
  } catch (error) {
    // Handle errors appropriately, e.g., log the error or send an error response
    console.error(error);
    return Response.json({ error: 'An error occurred' }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const data = await Report.find({}).populate(['windfarm']); //['windfarm','tags']
    return Response.json(data);
  } catch (error) {
    // Handle errors appropriately, e.g., log the error or send an error response
    console.error(error);
    return Response.json({ error: 'An error occurred' }, { status: 500 });
  }
}
