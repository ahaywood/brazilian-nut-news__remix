import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { BaseLayout } from "~/layouts/BaseLayout";
import {
  type LoaderFunctionArgs,
  type ActionFunctionArgs,
} from "@remix-run/node";
import { clientSupabase, serverSupabase } from "~/lib/supabase";

export async function loader({ request }: LoaderFunctionArgs) {
  const { headers } = clientSupabase(request);
  return new Response("...", {
    headers,
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const { headers } = serverSupabase(request);

  return new Response("...", {
    headers,
  });
}

export default function Link({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
      <div className="min-h-[100vh] min-w-[100vw] bg-icterine dark:bg-cinder">
        <Outlet />
        <div className="border-t-2 border-t-cinder py-8 pl-leftGutter text-black dark:border-t-icterine dark:text-icterine">
          <Footer />
        </div>
      </div>
    </BaseLayout>
  );
}
