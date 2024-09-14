import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { json } from "@remix-run/node";
import { prisma } from "~/lib/prisma";

export async function action({ request }: ActionFunctionArgs) {
  try {
    const formData = await request.formData();

    const title = formData.get("title");
    const link = formData.get("link");

    if (!title || !link) {
      return json({ ok: false });
    }

    await prisma.link.create({
      data: {
        title: title as string,
        link: link as string,
        submittedBy: {
          connect: {
            id: 1, // This is the ID of the user that submitted the link
          },
        },
      },
    });
    return json({ ok: true });
  } catch (error) {
    console.error(error);
    return json({ ok: false });
  }
}

export default function Submit() {
  return (
    <div className="min-h-screen bg-icterine">
      <div className="page-grid">
        <div className="col-span-12 col-start-1 row-start-1">
          <h1 className="text-[375px] leading-[295px] text-cinder">
            SUBMIT <div className="outline">A Link</div>
          </h1>
        </div>
        <div className="col-span-4 col-start-8 row-start-1">
          <div className="mt-12 bg-icterine">
            <Form method="post">
              <div className="field">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" required />
              </div>
              <div className="field">
                <label htmlFor="link">Link</label>
                <input type="url" name="link" required />
              </div>
              <button
                type="submit"
                className="w-full bg-cinder py-6 text-center text-[38px] font-bold leading-none text-icterine hover:bg-fountainBlue"
              >
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
