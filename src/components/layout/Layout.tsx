import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalMapSection from "@/components/shared/GlobalMapSection";
import { PageTransition } from "./PageTransition";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col prevent-overflow">
      <Header />
      <PageTransition className="flex-1 pt-16 lg:pt-20 safe-area-top">
        <main>{children}</main>
      </PageTransition>
      <GlobalMapSection />
      <Footer />
    </div>
  );
};

export default Layout;
