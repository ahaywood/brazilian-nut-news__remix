import { Nav } from "~/components/Nav";
import { Header } from "~/components/Header";

const BaseLayout = ({
  isAuthenticated,
  currentUser = { nickname: "" },
  children,
}: {
  isAuthenticated: boolean;
  currentUser?: {
    nickname: string;
  };
  children: React.ReactNode;
}) => {
  // const data = useLoaderData<typeof loader>();
  // console.log({ data });
  return (
    <>
      <Nav
        isAuthenticated={isAuthenticated}
        currentUser={{ nickname: currentUser.nickname }}
      />
      <Header />
      {children}
      {/* the footer is not included on this page because it needs to use the
        background color of the nested layout */}
    </>
  );
};

export { BaseLayout };
