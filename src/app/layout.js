import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Nav from "@/components/Navbar/Nav";
import Projects from "@/components/projects/Projects";
import AboutUs from "@/components/about/AboutUs";
import ContactUs from "@/components/contact/ContactUs";
import VideoPage from "@/components/VideoPage";
import HowToGetBondCard from "@/components/HowToGetBondCard";
import HotBuyPage from "@/components/HotBuyPage";

export const metadata = {
  title: "Dashboard | E-Stack Bond",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark:bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400">
        {/* <Navbar /> */}
        <Nav />
        {children}
        <AboutUs />
        <Projects />
        <HowToGetBondCard />
        <HotBuyPage />
        <ContactUs />
        <VideoPage />
        <Footer />
      </body>
    </html>
  );
}
