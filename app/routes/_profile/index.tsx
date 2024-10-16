import { BaseLayout } from "~/layouts/BaseLayout";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { ProfileHeader } from "~/components/ProfileHeader";
import {
  type LoaderFunctionArgs,
  json,
} from "@remix-run/node";
import { getCurrentUser } from "~/lib/getCurrentUser.server";
import { supabase } from "~/lib/supabase";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { isAuthenticated, nickname, userId, headers } =
    await getCurrentUser(request);

  // get the nickname from the URL
  // this is different than the current user's nickname
  const profileNickname = params.nickname;

  // get the profile details
  const results = await supabase
    .from("User")
    .select("*")
    .eq("nickname", profileNickname)
    .single();
  console.log(results);

  if (results.error) {
    console.error({ error: results.error });
    return json({ error: "Failed to get the profile details" }, { status: 500 });
  }

  return json(
    {
      data: { userId, nickname, isAuthenticated, profile: results.data },
    },
    { headers }
  );
}

export default function Profile() {
  const { data } = useLoaderData<typeof loader>();
  return (
    <BaseLayout
      isAuthenticated={data.isAuthenticated}
      currentUser={{ nickname: data.nickname }}
    >
      <div className="min-h-screen bg-cinder">
        <ProfileHeader
          userByNickname={{
            id: data.profile.id,
            nickname: data.profile.nickname,
            firstName: data.profile.firstName,
            lastName: data.profile.lastName,
            email: data.profile.email,
            github: data.profile.github,
            facebook: data.profile.facebook,
            youtube: data.profile.youtube,
            linkedin: data.profile.linkedin,
            twitter: data.profile.twitter,
          }}
          currentUser={{
            id: data.userId,
          }}
        />

        <Outlet />

        <div className="border-t-2 border-t-icterine py-8 pl-leftGutter text-icterine">
          <Footer />
        </div>
      </div>
    </BaseLayout>
  );
}
