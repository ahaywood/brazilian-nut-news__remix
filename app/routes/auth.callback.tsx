import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { clientSupabase } from "~/lib/supabase";

export const loader = async ({ request }: ActionFunctionArgs) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  if (code) {
    const { supabase, headers } = clientSupabase(request);
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (error) {
      return redirect("/sign-in");
    }
    return redirect("/dashboard", {
      headers,
    });
  }
  return new Response("Authentication failed", {
    status: 400,
  });
};
