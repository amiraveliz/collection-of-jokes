import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    subsets: ["latin"],
});

export const metadata = {
    title: "Collection of Jokes",
    description: "A collection of jokes from the official-joke-api",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${roboto.className} antialiased`}>
                {children}
            </body>
        </html>
    );
}
