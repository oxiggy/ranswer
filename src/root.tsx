import React from "react";
import './root.css'
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "@remix-run/react";
import { QueryClient, QueryClientProvider } from "react-query";

export function Layout({ children }: { children: React.ReactNode }) {
  const queryClient = React.useMemo(() => new QueryClient(), []);

  return (
    <QueryClientProvider client={queryClient}>
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <Meta />
          <Links />
        </head>
        <body>
          {children}
          <ScrollRestoration />
          <Scripts />
        </body>
      </html>
    </QueryClientProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function HydrateFallback() {
  return <p>Loading...</p>;
}
