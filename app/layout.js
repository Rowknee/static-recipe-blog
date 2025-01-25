
import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Cook Ease",
  description: "Cook Ease is a play on words Cookies",
};

let header = (
  <header>
    <Link href={'/'} >
      <h1>Cook Ease</h1>
    </Link>

  </header>
)

let footer = (
  <footer>
    <p>Made with 😁 </p>
  </footer>
)

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
