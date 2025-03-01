import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Strony i Aplikacje Mobilne Nowy Sącz – SEO | DomiWeb",
  description:
    "Strony internetowe i aplikacje mobilne w Nowym Sączu – DomiWeb! Nowoczesne rozwiązania z SEO, które przyciągną klientów. Zadbamy o Twoją widoczność w Google – napisz do nas!",
  alternates: {
    canonical: "https://www.domiweb.pl/",
  },
  openGraph: {
    type: "website",
    url: "https://www.domiweb.pl/",
    title: "Strony i Aplikacje Mobilne Nowy Sącz – SEO | DomiWeb",
    description:
      "Strony internetowe i aplikacje mobilne w Nowym Sączu – DomiWeb! Nowoczesne rozwiązania z SEO, które przyciągną klientów. Zadbamy o Twoją widoczność w Google – napisz do nas!",
    images: "/opengraph-image.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${font.className} bg-neutral-100 dark:bg-neutral-900`}>
        {children}
      </body>
    </html>
  );
}
