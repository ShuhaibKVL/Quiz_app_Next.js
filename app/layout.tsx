
import "./globals.css";
import {lusitana } from './ui/fonts'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      className={`${lusitana.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
