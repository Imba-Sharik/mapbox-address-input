import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mapbox Address Input — Demo",
  description: "Mapbox SearchBox + map preview component. Install via npx mapbox-address-input.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
