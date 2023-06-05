import { DefaultSeo } from "next-seo";

export const Seo = () => {
  return (
    <DefaultSeo
      titleTemplate="%s | Save My Brew"
      openGraph={{
        type: "website",
        locale: "en_IE",
        url: "https://www.savemybrew.com/",
        siteName: "Save My Brew",
      }}
      twitter={{
        handle: "@savemybrew",
        site: "@savemybrew",
        cardType: "summary_large_image",
      }}
    />
  );
};
