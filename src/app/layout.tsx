import { Footer } from "./components/footer";
import { Header } from "./components/header";
import "./styles.css";

export const metadata = {
  title: "Online CV",
  description: "This is my online CV in next",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
