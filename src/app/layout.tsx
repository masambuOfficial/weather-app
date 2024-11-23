"use client"; // Client-side layout

import ServerLayout from "./ServerLayout"; // Import the server wrapper
import localFont from "next/font/local";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "react-query";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();

  return (
    <ServerLayout>
      {/* ServerLayout wraps this client component */}
      <html lang="en">
        <QueryClientProvider client={queryClient}>
          <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
          >
            {children}
          </body>
        </QueryClientProvider>
      </html>
    </ServerLayout>
  );
}
