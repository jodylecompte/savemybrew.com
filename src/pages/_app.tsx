import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useState } from "react";

import type { AppProps } from "next/app";

import TimeAgo from "javascript-time-ago";

import en from "javascript-time-ago/locale/en.json";

import "@/styles/globals.css";

TimeAgo.addDefaultLocale(en);

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionContextProvider>
  );
}
