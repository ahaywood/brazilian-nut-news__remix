import { supabase } from "~/lib/supabase";
import { useLoaderData } from "@remix-run/react";
import { SharedLink } from "~/components/SharedLink";

export async function loader(request: Request) {
  const links = await supabase.from("Link").select("*, submittedById(*)");

  return {
    data: { links },
  };
}

export default function Latest() {
  const { data } = useLoaderData<typeof loader>();
  return data?.links?.data?.map((item) => (
    <SharedLink
      key={item.id}
      isAuthenticated={false}
      currentUserVote="UP"
      numberOfComments={2}
      favorited={false}
      id={item.id}
      title={item.title}
      countVotes={3}
      submittedBy={{
        id: item.submittedById.id,
        firstName: item.submittedById.firstName,
        lastName: item.submittedById.lastName,
        nickname: item.submittedById.nickname,
      }}
      lastUpdated={item.updatedAt}
      url={item.link}
    />
  ));
}
