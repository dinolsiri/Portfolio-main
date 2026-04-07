import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://dinolsiriwardena.dev"),
  title: {
    default: "Dinol Siriwardena | Software Developer & AI Engineer",
    template: "%s | Dinol Siriwardena"
  },
  description:
    "Portfolio of Dinol Siriwardena - Software Developer, AI Engineer, and Full-Stack Developer specializing in Machine Learning, Backend Systems, and Modern Web Technologies.",
  openGraph: {
    title: "Dinol Siriwardena | Software Developer & AI Engineer",
    description:
      "Full-stack development, machine learning systems, and scalable web applications. Building intelligent systems and creating impactful solutions.",
    type: "website",
    url: "https://github.com/dinolsiri"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="font-[var(--font-body)]">
        <Nav />
        <main className="mx-auto w-full max-w-7xl px-4 pt-10 sm:px-6 lg:px-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
