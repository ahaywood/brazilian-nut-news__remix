import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { BaseLayout } from "~/layouts/BaseLayout";

export default function Auth({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout isAuthenticated={false} currentUser={{}}>
      <>
        <Outlet />

        <div className="border-t-2 border-t-icterine bg-icterine py-8 pl-leftGutter text-cinder">
          <Footer />
        </div>
      </>
    </BaseLayout>
  );
}
