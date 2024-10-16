import {
  type LoaderFunctionArgs,
  json,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { SharedLink } from "~/components/SharedLink";
import { supabase } from "~/lib/supabase";
import { getCurrentUser } from "~/lib/getCurrentUser.server";

export async function loader({ params, request }: LoaderFunctionArgs) {
  const { isAuthenticated } = await getCurrentUser(request);

  // get the nickname from the URL
  // this is different than the current user's nickname
  const profileNickname = params.nickname;

  // get the profile details
  const results = await supabase
    .from("User")
    .select("*, Link(*)")
    .eq("nickname", profileNickname)
    .single();

  if (results.error) {
    console.error({ error: results.error });
    return json({ error: "Failed to get the profile details" }, { status: 500 });
  }

  return json({ data: { isAuthenticated, links: results.data }});

}

export default function IndividualProfile() {
  const { data } = useLoaderData<typeof loader>();
  console.log({ data });
  return (
    <>
      {data.links.Link.map((link: any, index: any) => (
        <SharedLink
          key={index}
          isAuthenticated={data.isAuthenticated}
          currentUserVote={null}
          numberOfComments={0}
          favorited={false}
          id={link.id}
          title={link.title}
          countVotes={0}
          submittedBy={{
            id: data.links.id,
            firstName: data.links.firstName,
            lastName: data.links.lastName,
            nickname: data.links.nickname,
          }}
          lastUpdated={link.updatedAt}
          url={link.link}
        />
      ))}
  </>
  )
}