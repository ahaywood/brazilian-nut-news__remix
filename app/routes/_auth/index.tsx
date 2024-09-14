import { Outlet } from "@remix-run/react";

export default function Auth({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Auth</h1>
      <Outlet />
    </div>
  );
}