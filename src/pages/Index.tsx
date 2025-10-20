import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "./Home";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default Index;
