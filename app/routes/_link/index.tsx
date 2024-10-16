import { Outlet, useLoaderData } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { BaseLayout } from "~/layouts/BaseLayout";
import {
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
  json,
} from "@remix-run/node";
import { getCurrentUser } from "~/lib/getCurrentUser.server";
import { serverSupabase } from "~/lib/supabase";

export async function loader({ request }: LoaderFunctionArgs) {
  const { isAuthenticated, nickname, userId, headers } =
    await getCurrentUser(request);

  return json(
    {
      data: { userId, nickname, isAuthenticated },
    },
    { headers }
  );
}

export async function action({ request }: ActionFunctionArgs) {
  const { headers } = serverSupabase(request);

  return new Response("...", {
    headers,
  });
}

export default function Link({ children }: { children: React.ReactNode }) {
  const { data } = useLoaderData<typeof loader>();

  return (
    <BaseLayout
      isAuthenticated={data.isAuthenticated}
      currentUser={{ nickname: data.nickname }}
    >
      <div className="min-h-[100vh] min-w-[100vw] bg-icterine dark:bg-cinder">
        <Outlet />
        <div className="border-t-2 border-t-cinder py-8 pl-leftGutter text-black dark:border-t-icterine dark:text-icterine">
          <Footer />
        </div>
      </div>
    </BaseLayout>
  );
}
