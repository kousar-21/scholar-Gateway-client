
import CountUp from "react-countup";

const stats = [
  { value: 1000, label: "Scholarships Listed" },
  { value: 5000, label: "Applications Processed" },
  { value: 300, label: "Partner Universities" },
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-500 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
        {stats.map((s, idx) => (
          <div key={idx}>
            <h3 className="text-4xl font-bold">
              <CountUp end={s.value} duration={3} />+
            </h3>
            <p className="mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
