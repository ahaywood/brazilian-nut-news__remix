import { Nav } from "~/components/Nav"
import { Header } from "~/components/Header"

const BaseLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Nav />
      <Header />
      {children}
      {/* the footer is not included on this page because it needs to use the
        background color of the nested layout */}
    </>
  )
}

export {BaseLayout}