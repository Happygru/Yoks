import "./globals.css";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";

export const metadata = {
  title: "YOK",
  description: "YOK Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
