import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { ProfileHeader } from "~/components/ProfileHeader";
import { BaseLayout } from "~/layouts/BaseLayout";

export default function Profile() {
  return (
    <BaseLayout>
      <div className="min-h-screen bg-cinder">
        <ProfileHeader
          userByNickname={{
            id: "1",
            nickname: "amy",
            firstName: "Amy",
            lastName: "Dutton",
            email: "amy@braziliannut.news",
            github: "https://github.com/ahaywood",
            facebook: "https://facebook.com/amyhaywood",
            youtube: "https://youtube.com/amyhaywood",
            linkedin: "https://linkedin.com/in/amy-dutton",
            twitter: "https://twitter.com/selfteachme",
          }}
          currentUser={{
            id: "1",
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
