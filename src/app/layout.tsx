import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "The Pimenta | Kerala Homestay",
    description: "Experience the essence of Kerala at The Pimenta.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link rel="stylesheet" href="https://hattie.touchpointe.digital/assets/index.css" />
            </head>
            <body className={inter.className}>
                <Header />
                <main className="min-h-screen">
                    {children}
                </main>
                <Footer />
                <Script id="hattie-ai-config" strategy="beforeInteractive">
                    {`
                        window.HattieAI = {
                            tenantId: "266ffaed-a6f1-44bf-9445-6ade0c68945c",
                            apiUrl: "https://hattie.touchpointe.digital"
                        };
                    `}
                </Script>
                <Script
                    src="https://hattie.touchpointe.digital/assets/index.js"
                    type="module"
                    strategy="afterInteractive"
                />
            </body>
        </html>
    );
}
