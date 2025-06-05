import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delícias da Lucinda",
  description: "Salgados irresistíveis feitos com carinho! Ideal para festas, eventos e lanches. Peça agora pelo WhatsApp.",
  keywords: [
    "salgados",
    "festa",
    "delícias da lucinda",
    "salgados artesanais",
    "comida caseira",
    "delivery de salgados",
    "coquetel",
    "salgadinho",
    "encomenda salgados",
    "lucinda"
  ],
  authors: [{ name: "Delícias da Lucinda", url: "https://deliciasdalucinda.com.br" }],
  creator: "Delícias da Lucinda",
  metadataBase: new URL("https://deliciasdalucinda.com.br"),
  openGraph: {
    title: "Delícias da Lucinda | Salgados Artesanais",
    description: "Salgados artesanais crocantes e saborosos, perfeitos para qualquer ocasião. Encomende já pelo WhatsApp!",
    url: "https://deliciasdalucinda.com.br",
    siteName: "Delícias da Lucinda",
    images: [
      {
        url: "/LucindaLogo.png",
        width: 1200,
        height: 630,
        alt: "Logo Delícias da Lucinda com fundo de salgados",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Delícias da Lucinda | Salgados Artesanais",
    description: "Salgados crocantes, artesanais e cheios de sabor. Faça seu pedido agora pelo WhatsApp!",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
