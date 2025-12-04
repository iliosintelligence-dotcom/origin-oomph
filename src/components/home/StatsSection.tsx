const stats = [
  { value: "140M+", label: "Smartphone users in Nigeria" },
  { value: "35%", label: "Average foot traffic increase" },
  { value: "USD 0.50B", label: "Market size by 2030" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">{stat.value}</div>
              <div className="text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
