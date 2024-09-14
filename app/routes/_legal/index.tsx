import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { BaseLayout } from "~/layouts/BaseLayout";
import { getMarkdown } from "~/utils/mdx.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const path = url.pathname.split('/').pop() || 'index';
  const filePath = `app/routes/_legal.${path}.mdx`;

  try {
    const { frontmatter } = await getMarkdown(filePath);
    return json({ frontmatter });
  } catch (error) {
    console.error(`Failed to load MDX file: ${filePath}`, error);
    throw json({ message: "Legal document not found" }, { status: 404 });
  }
};

export default function Legal() {
  const { frontmatter } = useLoaderData<typeof loader>();

  return (
    <BaseLayout>
      <div className="legal-content bg-icterine legal-content">
        <h1>{frontmatter.title}</h1>
        <div className="page-grid">
          <div className="col-span-6 col-start-4 mb-[100px]">
            <Outlet />
          </div>
        </div>
        <div className="border-t-2 border-t-cinder py-8 pl-leftGutter text-black">
          <Footer />
        </div>
      </div>
    </BaseLayout>
  );
}