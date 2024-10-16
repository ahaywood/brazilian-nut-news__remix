import { clientSupabase } from "~/lib/supabase";

export const getCurrentUser = async (request: Request) => {
  const { headers, supabase } = clientSupabase(request);

  let isAuthenticated = false;
  let nickname = "";
  let userId = "";

  // get the logged in user
  const result = await supabase.auth.getUser();
  if (result.error) console.error({ error: result.error });
  else if (result.data) {
    userId = result.data.user?.id;
    isAuthenticated = true;
  }

  // if we found the user, then get their nickname
  if (userId) {
    const profileResult = await supabase
      .from("User")
      .select("nickname")
      .eq("userId", userId)
      .single();
    if (profileResult.error) console.error({ error: profileResult.error });
    else if (profileResult.data) nickname = profileResult.data?.nickname;
  }

  return { isAuthenticated, nickname, userId, headers };
}