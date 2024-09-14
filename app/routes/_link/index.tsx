import { Outlet } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { BaseLayout } from "~/layouts/BaseLayout";

export default function Link({ children }: { children: React.ReactNode }) {
  return (
    <BaseLayout>
    <div className="min-h-[100vh] min-w-[100vw] bg-icterine dark:bg-cinder">
      <Outlet />
      <div className="border-t-2 border-t-cinder py-8 pl-leftGutter text-black dark:border-t-icterine dark:text-icterine">
        <Footer />
        </div>
      </div>
    </BaseLayout>
  );
}