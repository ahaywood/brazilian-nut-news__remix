import { redirect } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { clientSupabase } from "~/lib/supabase";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const { supabase, headers } = clientSupabase(request);
  // check if user is logged in
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session?.user) {
    return redirect("/");
  }

  // sign out
  await supabase.auth.signOut();

  return redirect("/", {
    headers,
  });
};
