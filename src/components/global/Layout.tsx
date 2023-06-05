import { NextSeo } from "next-seo";
import { Footer, Header } from "./";

import type { PageMeta } from "@/types";

type LayoutProps = {
  children: React.ReactNode;
  meta: PageMeta;
};

export const Layout = ({ children, meta }: LayoutProps) => {
  return (
    <>
      <NextSeo title={meta.title} description={meta.description} />
      <div className="flex flex-col h-full">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};
