import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.audex.dev"),
  title: {
    default: "audex.dev",
    template: "%s | audex.dev",
  },
  description: "Technical notes, local model experiments, and small projects from audex.",
  openGraph: {
    title: "audex.dev",
    description: "Technical notes, local model experiments, and small projects from audex.",
    url: "https://www.audex.dev",
    siteName: "audex.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@audexdev",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="antialiased dark">
        {children}
      </body>
    </html>
  );
}
