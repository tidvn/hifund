import Footer from "@/components/footer"
import Header from "@/components/header"
import { SideBar } from "./layout/layout-supporter/SideBar/sidebar"


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* <Header />
      <main className=" container mx-auto min-h-screen px-4 py-24 md:px-6">{children}</main>
      <Footer /> */}

      <div id="__next" data-reactroot="">
        <SideBar />
        <div className="sc-uiqay7-0 cnwZin">
          <main
            role="main"
            id="renderPageContentWrapper"
            className="sc-xcwtyu-0 cdNigF"
          >
            {children}
          </main>
        </div>

      </div>

    </>
  )
}
