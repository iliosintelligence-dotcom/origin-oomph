import {
  HeroSection,
  ValuePropsSection,
  HowItWorksSection,
  BenefitsSection,
  StatsSection,
  TestimonialsSection,
  FaqSection,
  CtaBanner,
} from "@/components/home";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ValuePropsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <StatsSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaBanner />
    </div>
  );
};

export default Home;
