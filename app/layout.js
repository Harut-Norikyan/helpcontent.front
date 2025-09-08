import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles/style.css"
import "./styles/responsive.css"
import "./styles/templateStyle.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "HelpContent – Test Data for Developers",
  description:
    "HelpContent is your assistant for using texts, JSON, images, audio, and video in your HTML or test applications before you get real data from your server.",
  keywords: [
    "HelpContent",
    "test data",
    "get json",
    "dummy content",
    "placeholder text",
    "sample JSON",
    "demo images",
    "audio test files",
    "video test files",
    "HTML development",
  ],
  authors: [{ name: "HelpContent Team" }],
  metadataBase: new URL("https://helpcontent.net"), // твой реальный домен
  openGraph: {
    title: "HelpContent – Test Data for Developers",
    description:
      "Use texts, JSON, images, audio, and video as test content in your HTML or applications until real data is available.",
    url: "https://helpcontent.net",
    siteName: "HelpContent",
    images: [
      {
        url: "/images/main-image.jpeg", // путь из public/
        width: 1200,
        height: 630,
        alt: "HelpContent preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HelpContent – Test Data for Developers",
    description:
      "HelpContent provides texts, JSON, images, audio, and video for HTML and test applications before you connect real server data.",
    images: ["/images/main-image.jpeg"], // путь из public/
    creator: "@helpcontent",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="sitemap" type="application/xml" title="Sitemap" href="/sitemap.xml" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
