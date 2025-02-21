import "./globals.css";
import Header from "@/components/Header"
// import Footer from "@/components/Footer"

export const metadata = {
  title: "Clínica M.O",
  description: "Sla mano",
  charset: 'UTF-8',
  author: 'Beatriz Alexandra',
  keywords: 'HTML, CSS, JavaScript, React, Next.js',
  // icons: {
  //   icon: "/f"
  // }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main" >
          {children}
        </main>
        {/* <Footer /> */}
      </body>

    </html>
  );
}
