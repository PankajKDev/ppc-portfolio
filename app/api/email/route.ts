import connectDB from "@/lib/connectDB";
import FormInfo from "@/models/FormInfo.schema";

export async function POST(req: Request) {
  await connectDB();
  try {
    const body = await req.json();
    const { name, email, requirement } = body;

    const newFormInfo = new FormInfo({
      name,
      email,
      requirement,
    });
    const savedFormInfo = await newFormInfo.save();
    const formId = savedFormInfo._id;
    return Response.json(
      { message: `successfully sent form with id:${formId}` },
      { status: 200 },
    );
  } catch (e) {
    return Response.json(
      { message: `error sending form encountered error ${e}` },
      { status: 400 },
    );
  }
}
