import NavBar from "@/components/header/NavBar";
import Banner from "@/components/banner/Banner";
import ScrollButton from "@/components/scroll-button";
import Footer from "./footer";
import { MobileMenu } from "@/components/mobile-menu/mobile-menu";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="mb-12 lg:mb-32 bg-[url('/assets/images/mobile-BG.webp')] lg:bg-[url('/assets/images/BG.webp')] lg:h-[1018px] bg-no-repeat w-full bg-cover bg-center 2xl:bg-cover 2xl:bg-center h-90vh overflow-x-hidden relative">
        <NavBar />
        <Banner />
        <div className="lg:absolute lg:left-0 z-10 bottom-0 max-sm:relative">
          <img
            src={"/assets/images/oldman.webp"}
            className="w-1/3 height-auto min-w-60 max-sm:mx-auto"
            alt="Old Man"
          />
        </div>
      </div>
      <MobileMenu />
      {children}
      <Footer />
      <ScrollButton />
    </div>
  );
}

export default Layout;
