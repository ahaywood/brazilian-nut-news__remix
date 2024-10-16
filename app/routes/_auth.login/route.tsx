import { json, redirect } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import { serverSupabase } from "~/lib/supabase";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { supabase, headers } = serverSupabase(request);

  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    console.error({ error });
    return json({ success: false }, { headers });
  }

  return redirect("/", { headers });
};

export default function Login() {
  const actionResponse = useActionData<typeof action>();
  console.log({ actionResponse });
  return (
    <div className="page-grid min-h-screen bg-cinder">
      <div className="col-span-12 col-start-1 row-start-1">
        <h1 className="max-w-screen overflow-hidden pt-6 text-[375px] leading-[295px] text-fountainBlue">
          <div className="text-white">Login</div>
          <div className="outline">LOGIN</div>
          <div className="outline">LOGIN</div>
        </h1>
      </div>
      <div className="col-span-4 col-start-8 row-start-1">
        <Form method="POST" className="mt-[100px] bg-cinder p-4 text-white">
          <div className="field">
            <label htmlFor="email" className="text-icterine">
              Email
            </label>
            <input type="text" name="email" required />
          </div>

          <div className="field">
            <div className="flex items-end justify-between">
              <label htmlFor="password" className="text-icterine">
                Password
              </label>
              <a
                href="/forgot-password"
                className="mb-3 text-icterine underline hover:text-white hover:no-underline"
              >
                Forgot?
              </a>
            </div>
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-icterine py-6 text-center text-[38px] font-bold leading-none text-cinder hover:bg-fountainBlue"
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}
