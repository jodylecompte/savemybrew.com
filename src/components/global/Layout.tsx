import { useUser } from "@auth0/nextjs-auth0/client";

import { Footer, Header } from "./";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
