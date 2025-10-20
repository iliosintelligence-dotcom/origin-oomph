import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AppPartners = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-br from-info to-primary">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Monetize your app with proximity marketing
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
              Integrate our SDK and unlock new revenue streams while engaging nearby users
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AppPartners;
