import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessClients = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-br from-secondary to-secondary/80">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-secondary-foreground mb-6">
              Bring customers in when they are nearby
            </h1>
            <p className="text-xl text-secondary-foreground/90 max-w-3xl mx-auto mb-8">
              Drive foot traffic and boost revenue with location-based notifications
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessClients;
