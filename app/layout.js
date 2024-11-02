import { Poppins } from "next/font/google";
import "./globals.css";

const font = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Tworzenie Stron Internetowych i Aplikacji Mobilnych - DomiWeb",

  description:
    "Zwiększ widoczność w sieci z DomiWeb! Oferujemy profesjonalne strony internetowe i aplikacje mobilne, optymalizowane pod SEO oraz zaprojektowane z myślą o doskonałym UX. Postaw na nowoczesne rozwiązania, które przyciągną klientów i wyróżnią Twoją markę w wynikach wyszukiwania Google.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body className={`${font.className} bg-neutral-100 `}>{children}</body>
    </html>
  );
}
