import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col w-full">
      <Navbar />
      <div className="relative min-h-screen">{children}</div>
      <Footer />
    </div>
  );
}

export default layout;
