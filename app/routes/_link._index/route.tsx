import { prisma } from "~/lib/prisma";
import { useLoaderData } from "@remix-run/react";
import { SharedLink } from "~/components/SharedLink";

export async function loader() {
  return {
    links: await prisma.link.findMany(),
  };
}

export default function Link() {
  const data = useLoaderData<typeof loader>();
  return data.links.map((item) => <SharedLink key={item.id} />);
}
