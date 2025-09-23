import { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";

type RevalidateBody = {
  type: "tag" | "path";
  value: string;
};

export async function POST(request: NextRequest) {
  const secret = request.headers.get("x-secret");
  const body = (await request.json()) as RevalidateBody;

  if (secret !== process.env.REVALIDATE_SECRET) {
    return Response.json({ message: "unauthorized" }, { status: 401 });
  }

  if (!body.value) {
    return Response.json({ message: "Missing value" }, { status: 400 });
  }

  if (body.type === "tag") {
    revalidateTag(body.value);
  } else {
    revalidatePath(body.value);
  }

  return Response.json({ revalidated: true, now: Date.now() });
}
