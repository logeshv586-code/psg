import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import GlobalMapSection from "@/components/shared/GlobalMapSection";
import { PageTransition } from "./PageTransition";
import Chatbot from "@/components/chatbot/Chatbot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col prevent-overflow">
      <Header />
      <PageTransition className="flex-1">
        <main>{children}</main>
      </PageTransition>
      <GlobalMapSection />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Layout;
