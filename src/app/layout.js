import "./globals.css";
import Script from 'next/script'


export const metadata = {
  title: "CGPA Calculator · DIU",
  description:
    "Calculate your CGPA, Semester GPA, and Course Grades for Daffodil International University",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Rajdhani:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body>
        {children}

        {/* Script for oneko.js */}
        <Script 
          src="/oneko.js" 
          strategy="lazyOnload" 
        />
      </body>
    </html>
  );
}
